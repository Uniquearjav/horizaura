import { GrAmazon } from "react-icons/gr";
import { BsCurrencyRupee } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params}) {
  const slug = params.slug
 
  // fetch data
  const productmeta = await fetch(`https://horizaura.vercel.app/api/products?product_id=${slug}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata 
  return {
    title: `Horizaura - ${productmeta.item_name}`,
    description: productmeta.item_description,
    author: 'Arjav Choudhary',
  }
}

export default async function IndivisualPage({ params }) {
  console.log(params.slug)
  const res = await fetch(`https://${process.env.DOMAIN}/api/products?asin=${params.slug}`)
  const product = await res.json()
  let INRIndia = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3
  });
  return (
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" width={400} height={400} src={`${product.image_url}`} />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-xl title-font text-gray-500 tracking-widest">HORIZAURA</h2>
          <h1 className="text-gray-900 dark:text-white text-3xl title-font font-medium my-5">{product.item_name}</h1>
          <p className="leading-relaxed">{product.item_description}</p>
          <div className="flex m-5">
            <span className="title-font dark:text-white font-medium text-2xl flex items-center text-gray-900"><BsCurrencyRupee />{INRIndia.format(product.price)}</span>
            {/* <Link href={`https://www.amazon.in/dp/${product.asin1}/`}> */}
            <button className="flex ml-auto items-center text-white dark:bg-black bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Buy from Amazon <GrAmazon className="m-2" />
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}