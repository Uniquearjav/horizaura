import ProductCard from "@/components/productcard"

export default async function Store() {
  // fetch data from the API
  const res = await fetch(`http://${process.env.DOMAIN}/api/products`, { cache: 'no-store'})
  const data = await res.json()
  console.log(data)
  return (
    <div classNameName="container g">
      <h1>Store</h1>
      <div classNameNameName="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {data.map((product) => (
        <ProductCard key={product["asin1"]} product={product} />
      ))
      }
      </div>
    </div>
  )
}