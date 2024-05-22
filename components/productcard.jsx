import { BsCurrencyRupee } from "react-icons/bs";
import Image from "next/image"
import Link from "next/link"
import { PiShoppingCartSimpleLight } from "react-icons/pi";

export default function ProductCard({ product}) {
    let INRIndia = new Intl.NumberFormat('en-IN', {
      maximumSignificantDigits: 3
    });
    return (
        <div key={product.asin1} className="products w-72 bg-white dark:bg-black shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href={`/store/${product.asin1}`}>
              <Image src={`${product.image_url}`} alt={`${product.item_name}, ID - Price - Rs. ${product.price}`} width={288} height={320} className="h-80 w-72 object-cover rounded-t-xl" />
              </Link>
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3  uppercase text-xs">HORIZAURA</span>
                <Link href={`/store/${product.asin1}`}>
                <p className="text-lg font-bold text-black dark:text-white truncate block capitalize">{ product.item_name}</p>
                </Link>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black dark:text-white cursor-auto my-3"> <span className="flex items-center"> <BsCurrencyRupee /> {INRIndia.format(product.price)}</span></p>
                  <Link href={`https://www.amazon.in/dp/${product.asin1}/`} className="ml-auto">
                  <PiShoppingCartSimpleLight className="text-2xl" />
                  </Link>
                </div>
              </div>
          </div>
    )

}