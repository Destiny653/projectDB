'use client'
import React, { useContext, useState } from 'react'; 
import { ChevronLeft, CreditCard, Truck, Shield } from 'lucide-react';
import { CartContext } from '../../../context/CartContext';
import { ScrollArea } from '../../../components/ui/scroll-area';

const CheckoutPage = () => {
  const { cartItems, handleAddToCart, calculateTotal } = useContext(CartContext);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <ChevronLeft className="mr-1 w-5 h-5" />
                <span>Continue Shopping</span>
              </button>
            </div>
            <h1 className="font-bold text-2xl text-gray-900">Checkout</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 max-w-7xl">
        <div className="gap-x-12 gap-y-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Form */}
          <div>
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="mb-4 font-semibold text-xl">Contact Information</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Shipping Information */}
              <div>
                <h2 className="mb-4 font-semibold text-xl">Shipping Information</h2>
                <div className="gap-4 grid grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="border-gray-300 col-span-2 px-4 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP code"
                    className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="mb-4 font-semibold text-xl">Payment Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card number"
                    className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                  <div className="gap-4 grid grid-cols-2">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500"
                      value={formData.cvv}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="mb-6 font-semibold text-xl">Order Summary</h2>
              <ScrollArea className="mb-6 h-[300px]">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item._id} className="flex items-center space-x-4">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="rounded-md w-16 h-16 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.title}</h3>
                        <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Order Totals */}
              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between font-semibold text-sm">
                  <span>Total</span>
                  <span>${(calculateTotal() + 5).toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button className="bg-blue-600 hover:bg-blue-700 mt-6 px-4 py-3 rounded-md w-full text-white transition-colors">
                Place Order
              </button>

              {/* Trust Badges */}
              <div className="gap-4 grid grid-cols-3 mt-6 text-center text-gray-500 text-sm">
                <div className="flex flex-col items-center">
                  <Shield className="mb-2 w-6 h-6" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="mb-2 w-6 h-6" />
                  <span>Fast Shipping</span>
                </div>
                <div className="flex flex-col items-center">
                  <CreditCard className="mb-2 w-6 h-6" />
                  <span>Money Back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;