import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, CreditCard, DollarSign, Check, PiggyBank } from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    saveInfo: false
  });
  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment here
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your courses are now available in your dashboard.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6 text-left">
            <h3 className="font-semibold mb-2">Order Details</h3>
            <p className="text-sm text-gray-600">Order #: KT20230615</p>
            <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</p>
            <p className="text-sm text-gray-600">Total: $178.00</p>
          </div>
          <Link 
            to="/my-courses" 
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 mb-4"
          >
            Go to My Courses
          </Link>
          <Link 
            to="/courses" 
            className="block w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-lg transition duration-300"
          >
            Browse More Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex items-center mb-8">
        <Link to="/cart" className="flex items-center text-blue-600 hover:text-blue-800">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Cart
        </Link>
        <h1 className="text-3xl font-bold ml-8">Checkout</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Payment Form */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-6">Payment Method</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={() => setPaymentMethod('credit')}
                className={`flex items-center justify-center p-4 border rounded-lg transition-colors ${paymentMethod === 'credit' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
              >
                <CreditCard className="w-6 h-6 mr-2" />
                Credit Card
              </button>
              <button
                onClick={() => setPaymentMethod('bank')}
                className={`flex items-center justify-center p-4 border rounded-lg transition-colors ${paymentMethod === 'bank' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
              >
                <PiggyBank className="w-6 h-6 mr-2" />
                Bank Transfer
              </button>
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`flex items-center justify-center p-4 border rounded-lg transition-colors ${paymentMethod === 'paypal' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
              >
                <DollarSign className="w-6 h-6 mr-2" />
                PayPal
              </button>
            </div>

            {paymentMethod === 'credit' && (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-gray-700">
                    Save payment information for next time
                  </label>
                </div>
              </form>
            )}

            {paymentMethod === 'bank' && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Bank Transfer Instructions</h3>
                <p className="text-gray-600 mb-4">
                  Please transfer the total amount to the following bank account:
                </p>
                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                  <p className="font-mono">Bank Name: KnowledgeTemple Bank</p>
                  <p className="font-mono">Account Number: 1234567890</p>
                  <p className="font-mono">Routing Number: 987654321</p>
                  <p className="font-mono">SWIFT/BIC: KNTEMPLE</p>
                </div>
                <p className="text-gray-600">
                  Your courses will be activated once the payment is received (usually within 1-2 business days).
                </p>
              </div>
            )}

            {paymentMethod === 'paypal' && (
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Pay with PayPal
                </button>
                <p className="text-gray-600 mt-4">
                  You will be redirected to PayPal to complete your payment securely.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal (2 items)</span>
                <span className="font-medium">$178.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-medium">$17.80</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4">
                <span className="font-bold">Total</span>
                <span className="font-bold text-blue-600">$195.80</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
            >
              Complete Payment
            </button>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Courses in this order</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <img 
                    src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                    alt="Course" 
                    className="w-12 h-12 object-cover rounded mr-3"
                  />
                  <div>
                    <p className="font-medium">Advanced JavaScript Course</p>
                    <p className="text-sm text-gray-600">$79.00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Course" 
                    className="w-12 h-12 object-cover rounded mr-3"
                  />
                  <div>
                    <p className="font-medium">Data Science Fundamentals</p>
                    <p className="text-sm text-gray-600">$99.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;