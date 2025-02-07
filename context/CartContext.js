 'use client';
import React, { createContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Check, X, AlertCircle } from 'lucide-react';

// Cart Notification Component
const CartNotification = ({ 
  isVisible, 
  message, 
  type = 'success',
  onClose,
  autoCloseTime = 3000 
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);

      return () => clearTimeout(timer);
    }
  }, [isVisible, autoCloseTime, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border ${
            type === 'success' ? 'bg-green-50 border-green-200' :
            type === 'error' ? 'bg-red-50 border-red-200' :
            'bg-purple-50 border-purple-200'
          }`}>
            {type === 'success' ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-red-500" />
            ) : (
              <ShoppingCart className="w-5 h-5 text-purple-500" />
            )}
            <p className="text-gray-700">{message}</p>
            <button
              onClick={onClose}
              className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Create Context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [cartTotal, setCartTotal] = useState(0);
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });

  // Update localStorage and calculate total whenever cart changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setCartTotal(total);
    }
  }, [cartItems]);

  const showNotification = (message, type = 'success') => {
    setNotification({
      isVisible: true,
      message,
      type
    });
  };

  const hideNotification = () => {
    setNotification(prev => ({
      ...prev,
      isVisible: false
    }));
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item._id === product._id);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity <= 0) {
          showNotification(`Removed ${product.title} from cart`, 'info');
          return prevItems.filter(item => item._id !== product._id);
        }
        
        showNotification(`Updated ${product.title} quantity to ${newQuantity}`);
        return prevItems.map(item =>
          item._id === product._id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }

      if (quantity > 0) {
        showNotification(`Added ${product.title} to cart`);
        return [...prevItems, { ...product, quantity }];
      }

      return prevItems;
    });
  };

  const handleRemoveFromCart = (productId) => {
    const product = cartItems.find(item => item._id === productId);
    if (product) {
      showNotification(`Removed ${product.title} from cart`, 'info');
      setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => {
      const product = prevItems.find(item => item._id === productId);
      if (product) {
        showNotification(`Updated ${product.title} quantity to ${newQuantity}`);
      }
      return prevItems.map(item =>
        item._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
    showNotification('Cart cleared', 'info');
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      cartTotal,
      handleAddToCart,
      handleRemoveFromCart,
      handleUpdateQuantity,
      clearCart,
      getCartItemCount
    }}>
      {children}
      <CartNotification
        isVisible={notification.isVisible}
        message={notification.message}
        type={notification.type}
        onClose={hideNotification}
      />
    </CartContext.Provider>
  );
};