export default async function generateStaticParams() {
  const res = await fetch(`http://${process.env.DOMAIN}/api/products`, { cache: 'no-store'})
  const data = await res.json()
  console.log(data)
 
  return data.map((data) => ({
    slug: data['product-id'],
  }))
}


// Mock product data (replace this with your actual data fetching mechanism)
const products = [
  // Your product data here
];

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.item-name}</h1>
      <p>{product.item-description}</p>
      <p>Price: {product.price}</p>
      <img src={product['image-url']} alt={product.item-name} />
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { asin1: product.asin1 }
  }));

  return { paths, fallback: true };
}

// This also gets called at build time
// It will receive the ASIN of the product as a parameter
export async function getStaticProps({ params }) {
  const product = products.find((p) => p.asin1 === params.asin1);

  return {
    props: {
      product
    },
    revalidate: 1, // In seconds, if you want to regenerate page on request
  };
}
