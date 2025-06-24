import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, CreditCard, Banknote, Wallet } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Advanced JavaScript Course",
      instructor: "Sarah Johnson",
      price: 99,
      discount: 79,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      duration: "8 weeks"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Michael Chen",
      price: 129,
      discount: 99,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "10 weeks"
    }
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.discount, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex items-center mb-8">
        <Link to="/courses" className="flex items-center text-blue-600 hover:text-blue-800">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Continue Shopping
        </Link>
        <h1 className="text-3xl font-bold ml-8">Your Cart</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <Link 
                to="/courses" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-semibold">
                <div className="col-span-5">Course</div>
                <div className="col-span-2 text-center">Duration</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Discount</div>
                <div className="col-span-1"></div>
              </div>
              
              {cartItems.map(item => (
                <div key={item.id} className="grid grid-cols-12 p-4 border-b border-gray-200 items-center">
                  <div className="col-span-5 flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">by {item.instructor}</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-gray-600">
                    {item.duration}
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="text-gray-400 line-through">${item.price}</span>
                  </div>
                  <div className="col-span-2 text-center font-semibold text-blue-600">
                    ${item.discount}
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4">
                <span className="font-bold">Total</span>
                <span className="font-bold text-blue-600">${total.toFixed(2)}</span>
              </div>
            </div>

            <Link 
              to="/checkout" 
              className={`block w-full text-center ${cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold py-3 px-4 rounded-lg transition duration-300`}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </Link>

            <div className="mt-6 flex items-center justify-center space-x-4">
              <CreditCard className="w-6 h-6 text-gray-400" />
              <Banknote className="w-6 h-6 text-gray-400" />
              <Wallet className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              Secure payment processing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;