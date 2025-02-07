'use client';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
// import { CartContext } from './context/CartContext';

export  const YourComponent = () => {
  const { 
    handleAddToCart, 
    handleRemoveFromCart, 
    handleUpdateQuantity,
    cartItems,
    cartTotal,
    getCartItemCount 
  } = useContext(CartContext);

  return (
    <div>
      <p>Cart Items: {getCartItemCount()}</p>
      <p>Total: ${cartTotal}</p>
      {/* Your component content */}
    </div>
  );
};
