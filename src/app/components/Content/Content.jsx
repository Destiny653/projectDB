import React, { useContext, useEffect, useState } from 'react';
import './content.css';
import { CartContext } from '../../../../context/CartContext';

const BaseProductComponent = ({ items, filters, category }) => {
  const { handleAddToCart, cartItems } = useContext(CartContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const [data, setData] = useState([]);

  const handlefetch = async () => {
    try {
      const response = await fetch('https://geni-backend.onrender.com/api/category');
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error('Error:', error);
      alert("Error: " + error.message);
    }
  }; 

  useEffect(() => {
    handlefetch();
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

  return (
    <div className="content">
      <div className="pro-container">
        {filteredItems.map((item) => (
          <div className="pro" key={item._id}>
            <img src={item.img} alt={item.title} />
            <div className="des">
              <span>{item.subCategory}</span>
              <h5>{item.title}</h5>
              <div className="star">
                {[...Array(Math.floor(item.rate || 0))].map((_, index) => (
                  <i key={index} className="fa-star fas"></i>
                ))}
              </div>
              <h4>${item.price}</h4>
            </div>
            {/* Cart controls */}
            <div className="cart-controls">
              <button 
                onClick={() => handleAddToCart(item, -1)}
                className="quantity-btn"
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
            <a onClick={() => handleAddToCart(item)}>
              <i className="cart fa-shopping-cart fal"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Category components
export const Cloths = ({ filters }) => (
  <BaseProductComponent filters={filters} category="Clothing" />
);

export const Bath = ({ filters }) => (
  <BaseProductComponent filters={filters} category="Bath" />
);

export const Diaper = ({ filters }) => (
  <BaseProductComponent filters={filters} category="Diaper" />
);

export const Feeding = ({ filters }) => (
  <BaseProductComponent filters={filters} category="Feeding" />
);

export const Toy = ({ filters }) => (
  <BaseProductComponent filters={filters} category="Toy" />
);

export const Valies = ({ filters }) => (
  <BaseProductComponent filters={filters} category="Valies" />
);