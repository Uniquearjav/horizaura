"use client";
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { removeFromCart, updateQuantity, clearCart } from '@/lib/redux/features/cart/cartSlice';
import Link from 'next/link';

export default function CartPage() {
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  return (
    <section className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl">Your cart is empty</h2>
          <Link href="/store" passHref>
            <Button className="mt-4">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Image - consistent sizing */}
                  <div className="h-24 w-24 relative mx-auto sm:mx-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 96px, 96px"
                    />
                  </div>
                  
                  {/* Content wrapper - stacked on mobile, row on desktop */}
                  <div className="w-full flex flex-col sm:flex-row sm:items-center gap-3">
                    {/* Product details */}
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                    
                    {/* Quantity controls - bigger touch targets */}
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="h-8 w-8" 
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
                          } else {
                            dispatch(removeFromCart(item.id));
                          }
                        }}
                      >
                        -
                      </Button>
                      <span className="w-6 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="h-8 w-8"
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      >
                        +
                      </Button>
                    </div>
                    
                    {/* Total price */}
                    <div className="text-right font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    
                    {/* Remove button */}
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="h-8 w-8 ml-auto sm:ml-0" 
                      onClick={() => dispatch(removeFromCart(item.id))}
                      aria-label="Remove item"
                    >
                      ×
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Checkout section - center on mobile, right-aligned on desktop */}
          <div className="mt-8 flex flex-col items-center sm:items-end">
            <div className="text-lg font-medium">Total: ${totalPrice.toFixed(2)}</div>
            <div className="flex gap-4 mt-4 w-full sm:w-auto">
              <Button 
                variant="outline" 
                onClick={() => dispatch(clearCart())}
                className="flex-1 sm:flex-initial"
              >
                Clear Cart
              </Button>
              <Button className="flex-1 sm:flex-initial">Checkout</Button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}