"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/features/cart/cartSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import products from "@/app/product.json";

export default function ProductPage({ params }) {
  const { productId } = params;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Find the current product
    const foundProduct = products.find((p) => p.id === parseInt(productId) || p.id === productId);
    setProduct(foundProduct);

    // Find related products (same category, excluding current)
    if (foundProduct) {
      const related = products
        .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) return;

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: quantity,
      })
    );
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/store" passHref>
          <Button>Return to Store</Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/store" className="hover:underline">Store</Link>
        {" / "}
        <Link href={`/store?category=${product.category}`} className="hover:underline">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>
        {" / "}
        <span className="text-gray-700">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          
          <div className="prose prose-sm max-w-none mb-6">
            <p>{product.description}</p>
          </div>
          
          {/* Stock Status */}
          <div className="text-green-600 mb-6">In Stock</div>
          
          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <span className="mr-4">Quantity</span>
            <div className="flex border rounded">
              <button 
                onClick={decrementQuantity}
                className="px-3 py-1 border-r hover:bg-gray-100"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button 
                onClick={incrementQuantity}
                className="px-3 py-1 border-l hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button 
            onClick={handleAddToCart} 
            className="w-full md:w-auto mb-4"
            size="lg"
          >
            Add to Cart
          </Button>
          
          {/* Additional Info */}
          <div className="mt-6 space-y-4 border-t pt-6">
            <div>
              <h3 className="font-semibold mb-1">Details</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                <li>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</li>
                <li>Product ID: {product.id}</li>
                <li>Free shipping on orders over $100</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <Card key={related.id} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={related.imageUrl}
                    alt={related.name}
                    fill
                    className="object-cover transition-all hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium line-clamp-1">{related.name}</h3>
                  <p className="text-sm font-semibold mt-1">${related.price.toFixed(2)}</p>
                  <Link href={`/store/${related.id}`} passHref>
                    <Button variant="outline" className="w-full mt-3" size="sm">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}