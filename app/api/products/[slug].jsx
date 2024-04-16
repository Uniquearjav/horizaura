import { products } from "./route";

export default function handler(req, res) {
    const {
      query: { slug },
    } = req;
  
    const product = products.find((p) => p['asin1'] === slug);
  
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    res.status(200).json(product);
  }