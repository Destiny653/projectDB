
import React, { useContext } from 'react';
import { ShoppingCart, X, Minus, Plus, Trash2 } from 'lucide-react';  
import { CartContext } from '../../../../context/CartContext';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../../../components/ui/sheet'; 
import {Button} from '../../../../components/ui/Button'; 

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    calculateTotal 
  } = useContext(CartContext);

  return (
    <Sheet>
      <SheetTrigger className="inline-flex relative items-center">
        <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-purple-600" />
        {cartItems.length > 0 && (
          <span className="-top-2 -right-2 absolute flex justify-center items-center bg-purple-600 rounded-full w-5 h-5 text-white text-xs">
            {cartItems.length}
          </span>
        )}
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-bold text-xl">Your Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col mt-8 h-full">
          {cartItems.length === 0 ? (
            <div className="flex flex-col flex-1 justify-center items-center py-12">
              <ShoppingCart className="mb-4 w-16 h-16 text-gray-300" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <SheetClose asChild>
                <Button className="bg-purple-600 hover:bg-purple-700 mt-4">
                  Continue Shopping
                </Button>
              </SheetClose>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex items-center py-4">
                    <div className="flex-shrink-0 border-gray-200 border rounded-md w-24 h-24 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>

                    <div className="flex flex-col flex-1 ml-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-base text-gray-900">{item.name}</h3>
                          <p className="mt-1 text-gray-500 text-sm">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => decreaseQuantity(item._id)}
                          className="hover:bg-gray-100 p-1 rounded-full text-gray-600"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item._id)}
                          className="hover:bg-gray-100 p-1 rounded-full text-gray-600"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-gray-200 mt-4 pt-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium text-base">Subtotal</span>
                  <span className="font-semibold text-lg">${calculateTotal()}</span>
                </div>
                <p className="mb-4 text-gray-500 text-sm">
                  Shipping and taxes calculated at checkout
                </p>
                <div className="space-y-2">
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 w-full"
                    onClick={() => window.location.href = '/checkout'}
                  >
                    Checkout
                  </Button>
                  <SheetClose asChild>
                    <Button 
                      variant="outline" 
                      className="w-full"
                    >
                      Continue Shopping
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;