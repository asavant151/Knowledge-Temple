import React from 'react';
import { Heart, X, Clock, BookOpen, ArrowRight } from 'lucide-react';

const Wishlist = () => {
  // Sample wishlist data
  const wishlistItems = [
    {
      id: 1,
      title: "Advanced JavaScript Masterclass",
      instructor: "Dr. Sarah Johnson",
      price: "$129",
      discount: "$99",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      duration: "8 weeks",
      category: "Programming"
    },
    {
      id: 2,
      title: "UX/UI Design Fundamentals",
      instructor: "Michael Chen",
      price: "$149",
      discount: "$119",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "6 weeks",
      category: "Design"
    },
    {
      id: 3,
      title: "Data Science Bootcamp",
      instructor: "Emma Rodriguez",
      price: "$199",
      discount: "$159",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "12 weeks",
      category: "Data Science"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Your Wishlist</h1>
          <p className="text-lg text-gray-600">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'course' : 'courses'} saved for later
          </p>
        </div>

        {/* Wishlist Content */}
        {wishlistItems.length > 0 ? (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Wishlist Items */}
            <div className="divide-y divide-gray-200">
              {wishlistItems.map((item) => (
                <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex flex-col md:flex-row md:items-center">
                    {/* Course Image */}
                    <div className="w-full md:w-1/4 lg:w-1/5 mb-4 md:mb-0 md:mr-6">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors">
                          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                        </button>
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="flex-1 md:mr-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-2">
                            {item.category}
                          </span>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-gray-600 mb-3">By {item.instructor}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-4">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{item.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <BookOpen className="w-4 h-4 mr-1" />
                          <span className="text-sm">32 Lessons</span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="mt-4 md:mt-0 w-full md:w-auto flex flex-col items-end">
                      <div className="text-right mb-4">
                        <span className="text-gray-400 line-through mr-2">{item.price}</span>
                        <span className="text-xl font-bold text-blue-600">{item.discount}</span>
                      </div>
                      <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                        Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <p className="text-gray-600">
                  Total: <span className="font-semibold text-gray-900">${wishlistItems.reduce((total, item) => total + parseInt(item.discount.replace('$', '')), 0)}</span>
                </p>
              </div>
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Enroll All Courses
              </button>
            </div>
          </div>
        ) : (
          /* Empty Wishlist State */
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="mx-auto w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Save your favorite courses by clicking the heart icon when browsing our catalog
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
              Browse Courses
            </button>
          </div>
        )}

        {/* Recommended Section */}
        {wishlistItems.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Recommended Course Cards */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`}
                      alt="Recommended course"
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors">
                      <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-2">
                      Recommended
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">React Native Masterclass</h3>
                    <p className="text-gray-600 text-sm mb-4">Build cross-platform mobile apps with React Native</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-blue-600">$89</span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        View <ArrowRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;