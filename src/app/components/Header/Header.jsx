'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, User, Menu, X } from 'lucide-react';
import Cart from '../Cart/Cart';
// import Cart from './Cart'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="z-50 fixed bg-white/90 shadow-md backdrop-blur-sm w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.h1 
              className="font-bold text-2xl text-purple-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              BabyBliss
            </motion.h1>
          </div>

          {/* Desktop Navigation */}
          <div className="md:flex items-center space-x-8 hidden">
            <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
            <a href="/product" className="text-gray-600 hover:text-purple-600 transition-colors">Shop</a>
            <a href="/login" className="text-gray-600 hover:text-purple-600 transition-colors">Login</a>
            <a href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
            <div className="flex items-center space-x-4">
              <button className="hover:text-purple-600">
                <Heart className="w-6 h-6 text-gray-600 hover:text-purple-600" />
              </button>
              <button className="hover:text-purple-600">
                <User className="w-6 h-6 text-gray-600 hover:text-purple-600" />
              </button>
              <Cart />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Cart />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="/" className="block px-3 py-2 text-gray-600">Home</a>
            <a href="/shop" className="block px-3 py-2 text-gray-600">Shop</a>
            <a href="/collections" className="block px-3 py-2 text-gray-600">Collections</a>
            <a href="/about" className="block px-3 py-2 text-gray-600">About</a>
            <div className="flex space-x-4 px-3 py-2">
              <button className="hover:text-purple-600">
                <Heart className="w-6 h-6 text-gray-600" />
              </button>
              <button className="hover:text-purple-600">
                <User className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;