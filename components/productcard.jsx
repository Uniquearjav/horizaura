import { IndianRupee } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { PiShoppingCartSimpleLight } from "react-icons/pi";

function ProductCard({ product}) {
    let INRIndia = new Intl.NumberFormat('en-IN', {
      maximumSignificantDigits: 3
    });
    return (
        <div key={product["asin1"]} className="products w-72 bg-white dark:bg-black shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href={`/store/${product["asin1"]}`}>
              <Image src={`${product["image-url"]}`} alt={`${product["item-name"]}}, ID - ${product["product-id-type"]}, Price - Rs. ${product["price"]}`} width={288} height={320} className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3  uppercase text-xs">HORIZAURA</span>
                <p className="text-lg font-bold text-black dark:text-white truncate block capitalize">{ product['item-name']}</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black dark:text-white cursor-auto my-3"> <span className="flex items-center"> <IndianRupee /> {INRIndia.format(product["price"])}</span></p>
                  <div className="ml-auto">
                  <PiShoppingCartSimpleLight className="text-2xl" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
    )

}

export default ProductCard