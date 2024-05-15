export default async function IndivisualPage({ params }) {
  const res = await fetch(`/api/products/${params.slug}`)
  const post = await res.json()
 
  return (
    <div>
      <h1>{post.asin1}</h1>
    </div>
  )
}