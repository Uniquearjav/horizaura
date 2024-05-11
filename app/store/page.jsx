import ProductCard from "@/components/productcard"

export default async function Store() {
  // fetch data from the API
  const res = await fetch(`http://${process.env.DOMAIN}/api/products`, { cache: 'no-store'})
  const data = await res.json()
  return (
    <div className="container g my-10">
      <h1 className="m-10 text-center text-6xl font-semibold">Store</h1>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {data.map((product) => (
        <ProductCard key={product["asin1"]} product={product} />
      ))
      }
      </div>
    </div>
  )
}