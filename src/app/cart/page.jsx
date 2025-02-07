 'use client';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { CartContext } from '../../../context/CartContext';
import  Button  from '../../../components/ui/Button'; 

export default function CartPage() {
  const { cartItems, handleAddToCart, emptyCart, fetchData } = useContext(CartContext);
  const [isClient, setIsClient] = useState(false);

  const formatter = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD' 
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const position = fetchData?.findIndex((value) => value._id === item.product_id);
      const itemInCart = fetchData?.[position];
      return total + (itemInCart?.price * item.quantity || 0);
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  if (!isClient) return null;

  return (
    <div className='relative flex justify-center gap-7 m-10 ml-0 px-1 w-full'>
      {/* Cart Items Table */}
      <div className='w-3/4'>
        <table className='w-full'>
          <thead>
            <tr className='border-b'>
              <th className='p-4 text-left'>Image</th>
              <th className='p-4 text-left'>Name</th>
              <th className='p-4 text-left'>Unit Price</th>
              <th className='p-4 text-left'>Quantity</th>
              <th className='p-4 text-left'>Total</th>
              <th className='p-4 text-left'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.length > 0 ? (
              cartItems.map((item, index) => {
                const position = fetchData?.findIndex((value) => value._id === item.product_id);
                const itemInCart = fetchData?.[position];
                const qtyInCart = item.quantity;
                const price = itemInCart?.price;

                return (
                  <tr key={index} className='border-b'>
                    <td className='p-4'>
                      <img 
                        className='rounded-full w-24 h-24 object-cover' 
                        src={itemInCart?.img} 
                        alt={itemInCart?.title} 
                      />
                    </td>
                    <td className='p-4'>{itemInCart?.title?.slice(0, 15)}</td>
                    <td className='p-4'>{formatter.format(price)}</td>
                    <td className='p-4'>
                      <div className='flex items-center gap-2 p-1 border rounded-lg'>
                        <button 
                          className='hover:bg-gray-100 px-3 py-1 rounded'
                          onClick={() => handleAddToCart(itemInCart, qtyInCart)}
                        >
                          -
                        </button>
                        <span className='px-3'>{qtyInCart}</span>
                        <button 
                          className='hover:bg-gray-100 px-3 py-1 rounded'
                          onClick={() => handleAddToCart(itemInCart)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className='p-4'>{formatter.format(price * qtyInCart)}</td>
                    <td className='p-4'>
                      <button 
                        onClick={() => handleAddToCart(itemInCart, qtyInCart, index)}
                        className='text-red-600 hover:text-red-700'
                      >
                        <Trash2 size={24} />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className='p-8 text-center text-gray-500 text-xl'>
                  Your Cart is empty!
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
        <Button
          variant="destructive"
          className='mt-4'
          onClick={emptyCart}
        >
          Reset Cart
        </Button>
      </div>

      {/* Cart Summary */}
      <div className='w-1/4'>
        <div className='top-24 sticky space-y-4 p-6 border rounded-lg'>
          <h2 className='mb-4 font-bold text-center text-xl'>Cart Summary</h2>
          
          <div className='space-y-3'>
            <div className='flex justify-between'>
              <span>Subtotal</span>
              <span>{formatter.format(totalPrice)}</span>
            </div>
            <div className='flex justify-between'>
              <span>Shipping</span>
              <span>Flat Rate</span>
            </div>
            <div className='flex justify-between'>
              <span>Tax</span>
              <span>{formatter.format(70)}</span>
            </div>
            <div className='pt-3 border-t'>
              <div className='flex justify-between font-bold'>
                <span>Total</span>
                <span>{formatter.format(totalPrice + 70)}</span>
              </div>
            </div>
          </div>

          <Button 
            className='mt-6 w-full'
            asChild
          >
            <Link href='/checkout'>
              Proceed to Checkout
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}