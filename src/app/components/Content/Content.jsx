import React, { useContext, useEffect, useState } from 'react';
import './content.css';
import { CartContext } from '../../../../context/CartContext';
import { Loader, AlertCircle } from 'lucide-react';

const BaseProductComponent = ({ items, filters, category }) => {
  const { handleAddToCart, cartItems } = useContext(CartContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handlefetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://geni-backend.onrender.com/api/category');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }; 

  useEffect(() => {
    handlefetch();
  }, []);

  useEffect(() => {
    if (!items) return;

    let filtered = [...items];

    // Apply price filter
    if (filters?.priceRange) {
      filtered = filtered.filter(item => item.price <= filters.priceRange);
    }

    // Apply age filter
    if (filters?.selectedAges?.length > 0) {
      filtered = filtered.filter(item => 
        filters.selectedAges.includes(item.ageGroup)
      );
    }

    // Apply category filter
    if (filters?.selectedCategories?.length > 0) {
      filtered = filtered.filter(item => 
        filters.selectedCategories.includes(item.subCategory)
      );
    }

    setFilteredItems(filtered);
  }, [items, filters]);

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems?.find(item => item.product_id === itemId);
    return cartItem?.quantity || 0;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <Loader className="mx-auto mb-4 w-8 h-8 text-purple-600 animate-spin" />
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="bg-red-50 p-4 rounded-lg text-center">
          <AlertCircle className="mx-auto mb-2 w-8 h-8 text-red-500" />
          <h3 className="mb-2 font-medium text-red-800">Error Loading Products</h3>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={handlefetch}
            className="bg-red-100 hover:bg-red-200 mt-4 px-4 py-2 rounded-md text-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (filteredItems.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <p className="text-gray-600">No products found matching your filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="content">
      <div className="pro-container">
        {filteredItems.map((item) => (
          <div className="pro" key={item._id}>
            <div className="relative">
              <img 
                src={item.img} 
                alt={item.title}
                onError={(e) => {
                  e.target.src = '/placeholder-image.jpg'; // Add a placeholder image
                  e.target.onerror = null; // Prevent infinite loop
                }}
              />
              {item.discount > 0 && (
                <span className="top-2 right-2 absolute bg-red-500 px-2 py-1 rounded-full text-sm text-white">
                  -{item.discount}%
                </span>
              )}
            </div>
            <div className="des">
              <span className="text-gray-600">{item.subCategory}</span>
              <h5 className="font-medium text-gray-900">{item.title}</h5>
              <div className="star">
                {[...Array(Math.floor(item.rate || 0))].map((_, index) => (
                  <i key={index} className="text-yellow-400 fa-star fas"></i>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-gray-900 text-lg">${item.price}</h4>
                {item.originalPrice > item.price && (
                  <span className="text-gray-500 text-sm line-through">
                    ${item.originalPrice}
                  </span>
                )}
              </div>
            </div>
            
            <div className="cart-controls">
              <button 
                onClick={() => handleAddToCart(item, -1)}
                className="quantity-btn"
                disabled={getItemQuantity(item._id) === 0}
              >
                -
              </button>
              <span className="quantity">
                {getItemQuantity(item._id)}
              </span>
              <button 
                onClick={() => handleAddToCart(item)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
            
            <button 
              onClick={() => handleAddToCart(item)}
              className="add-to-cart"
              disabled={loading}
            >
              <i className="cart fa-shopping-cart fal"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Category components with error boundaries
const withErrorBoundary = (WrappedComponent, category) => {
  return function WithErrorBoundary(props) {
    const [error, setError] = useState(null);

    if (error) {
      return (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="bg-red-50 p-4 rounded-lg text-center">
            <AlertCircle className="mx-auto mb-2 w-8 h-8 text-red-500" />
            <h3 className="mb-2 font-medium text-red-800">Error in {category}</h3>
            <p className="text-red-600">{error.message}</p>
          </div>
        </div>
      );
    }

    return (
      <WrappedComponent
        {...props}
        onError={setError}
      />
    );
  };
};

export const Cloths = withErrorBoundary(
  (props) => <BaseProductComponent {...props} category="Clothing" />,
  "Clothing"
);

export const Bath = withErrorBoundary(
  (props) => <BaseProductComponent {...props} category="Bath" />,
  "Bath"
);

export const Diaper = withErrorBoundary(
  (props) => <BaseProductComponent {...props} category="Diaper" />,
  "Diaper"
);

export const Feeding = withErrorBoundary(
  (props) => <BaseProductComponent {...props} category="Feeding" />,
  "Feeding"
);

export const Toy = withErrorBoundary(
  (props) => <BaseProductComponent {...props} category="Toy" />,
  "Toy"
);

export const Valies = withErrorBoundary(
  (props) => <BaseProductComponent {...props} category="Valies" />,
  "Valies"
);