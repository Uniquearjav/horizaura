export default function IndivisualProduct({params}) {
  console.log(params.slug)
  const products = params.slug
  return (
    <>
    <h1>Product = {products}</h1>
    </>
  )
}