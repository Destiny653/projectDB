'use client';
import React, { useState, useContext, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
// import { CartContext } from '@/context/CartContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Truck, 
  Shield, 
  RefreshCw,
  Loader,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartContext } from '../../../context/CartContext';

const ProductDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const { handleAddToCart, cartItems } = useContext(CartContext);
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://geni-backend.onrender.com/api//${productId}`);
        
        if (!response.ok) {
          throw new Error('Product not found');
        }
        
        const data = await response.json();
        setProduct(data);
        
        // Fetch related products
        const relatedResponse = await fetch(
          `https://geni-backend.onrender.com/api/products?category=${data.category}&limit=4`
        );
        const relatedData = await relatedResponse.json();
        setRelatedProducts(relatedData.filter(item => item._id !== productId));
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [productId]);

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems?.find(item => item._id === itemId);
    return cartItem?.quantity || 0;
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="w-8 h-8 text-purple-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-50 p-6 rounded-lg max-w-md text-center">
          <AlertCircle className="mx-auto mb-4 w-12 h-12 text-red-500" />
          <h2 className="mb-2 font-semibold text-red-800 text-xl">Error Loading Product</h2>
          <p className="mb-4 text-red-600">{error}</p>
          <button
            onClick={() => router.back()}
            className="bg-red-100 hover:bg-red-200 px-6 py-2 rounded-lg text-red-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="mx-auto px-4 py-8 container">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
        {/* Product Images */}
        <div className="relative">
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={product.images[currentImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
          
          {/* Navigation arrows */}
          <button
            onClick={handlePrevImage}
            className="top-1/2 left-4 absolute bg-white/80 hover:bg-white shadow-lg p-2 rounded-full transition-colors -translate-y-1/2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextImage}
            className="top-1/2 right-4 absolute bg-white/80 hover:bg-white shadow-lg p-2 rounded-full transition-colors -translate-y-1/2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Thumbnail navigation */}
          <div className="flex gap-2 mt-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-20 h-20 rounded-md overflow-hidden ${
                  currentImageIndex === index ? 'ring-2 ring-purple-600' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="mb-2 font-bold text-3xl text-gray-900">
              {product.title}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < product.rate
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                ({product.reviews?.length || 0} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-bold text-3xl text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-gray-500 text-xl line-through">
                ${product.originalPrice}
              </span>
            )}
            {product.discount > 0 && (
              <span className="bg-red-100 px-2 py-1 rounded-full text-red-700 text-sm">
                Save {product.discount}%
              </span>
            )}
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Truck className="w-5 h-5" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5" />
              <span>2-year warranty</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <RefreshCw className="w-5 h-5" />
              <span>30-day return policy</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => handleAddToCart(product, -1)}
                className="hover:bg-gray-100 px-4 py-2 transition-colors"
                disabled={getItemQuantity(product._id) === 0}
              >
                -
              </button>
              <span className="border-x px-4 py-2">
                {getItemQuantity(product._id)}
              </span>
              <button
                onClick={() => handleAddToCart(product)}
                className="hover:bg-gray-100 px-4 py-2 transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="flex-1 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium text-white transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-bold text-2xl text-gray-900">
            Related Products
          </h2>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <div
                key={item._id}
                className="group cursor-pointer"
                onClick={() => router.push(`/product?id=${item._id}`)}
              >
                <div className="bg-gray-100 mb-4 rounded-lg overflow-hidden aspect-square">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="group-hover:scale-105 w-full h-full transition-transform duration-300 object-cover"
                  />
                </div>
                <h3 className="group-hover:text-purple-600 font-medium text-gray-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;