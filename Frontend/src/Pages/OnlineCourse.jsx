import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Award, 
  CheckCircle,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const OnlineCourse = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Advanced JavaScript Masterclass",
      category: "Web Development",
      level: "Intermediate",
      duration: "32 hours",
      students: 1250,
      rating: 4.8,
      price: "$129",
      discount: "$99",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      instructor: "Sarah Johnson",
      instructorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      badges: ["Bestseller", "New"]
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      category: "Data Science",
      level: "Beginner",
      duration: "45 hours",
      students: 890,
      rating: 4.6,
      price: "$149",
      discount: "$119",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      instructor: "Michael Chen",
      instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      badges: ["Project-based"]
    },
    {
      id: 3,
      title: "UX/UI Design Masterclass",
      category: "Design",
      level: "Advanced",
      duration: "38 hours",
      students: 2100,
      rating: 4.9,
      price: "$179",
      discount: "$149",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      instructor: "Emma Rodriguez",
      instructorImage: "https://randomuser.me/api/portraits/women/63.jpg",
      badges: ["Bestseller"]
    },
    {
      id: 4,
      title: "Python for Automation",
      category: "Programming",
      level: "Beginner",
      duration: "28 hours",
      students: 750,
      rating: 4.7,
      price: "$119",
      discount: "$89",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      instructor: "David Wilson",
      instructorImage: "https://randomuser.me/api/portraits/men/45.jpg",
      badges: ["Hands-on"]
    },
    {
      id: 5,
      title: "Digital Marketing Strategy",
      category: "Marketing",
      level: "Intermediate",
      duration: "35 hours",
      students: 980,
      rating: 4.5,
      price: "$139",
      discount: "$109",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      instructor: "Lisa Wong",
      instructorImage: "https://randomuser.me/api/portraits/women/68.jpg",
      badges: ["Case Studies"]
    },
    {
      id: 6,
      title: "Mobile App Development with Flutter",
      category: "App Development",
      level: "Intermediate",
      duration: "42 hours",
      students: 1500,
      rating: 4.7,
      price: "$159",
      discount: "$129",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      instructor: "Robert Taylor",
      instructorImage: "https://randomuser.me/api/portraits/men/76.jpg",
      badges: ["Project-based"]
    }
  ];

  // Categories for filter
  const categories = [
    "All Categories",
    "Web Development",
    "Data Science",
    "Design",
    "Programming",
    "Marketing",
    "App Development"
  ];

  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Explore Our Online Courses
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Learn new skills with our expert-led courses. 200+ courses across various disciplines with flexible learning options.
            </p>
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full py-4 px-6 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="w-6 h-6 text-gray-500 absolute right-4 top-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-6">Filters</h2>
              
              {/* Categories Filter */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" /> Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="radio" 
                          name="category" 
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          defaultChecked={index === 0}
                        />
                        <span className="text-gray-700">{category}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Levels Filter */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" /> Levels
                </h3>
                <ul className="space-y-2">
                  {levels.map((level, index) => (
                    <li key={index}>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="radio" 
                          name="level" 
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          defaultChecked={index === 0}
                        />
                        <span className="text-gray-700">{level}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  Price Range
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="minPrice" className="block text-sm text-gray-600 mb-1">Min Price</label>
                    <input 
                      type="range" 
                      id="minPrice" 
                      min="0" 
                      max="200" 
                      defaultValue="0"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$200</span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="maxPrice" className="block text-sm text-gray-600 mb-1">Max Price</label>
                    <input 
                      type="range" 
                      id="maxPrice" 
                      min="0" 
                      max="200" 
                      defaultValue="200"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$200</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Courses List */}
          <div className="lg:w-3/4">
            {/* Sorting and Results */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="font-semibold text-gray-700">
                    Showing <span className="text-blue-600">6</span> of <span className="text-blue-600">24</span> courses
                  </h3>
                </div>
                <div className="flex items-center space-x-4">
                  <label htmlFor="sort" className="text-gray-600">Sort by:</label>
                  <select 
                    id="sort" 
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Most Popular</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Course Image */}
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-48 object-cover"
                    />
                    {/* Discount Badge */}
                    {course.discount && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {course.discount}
                      </div>
                    )}
                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {course.category}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {course.badges.map((badge, index) => (
                        <span 
                          key={index} 
                          className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>

                    {/* Instructor */}
                    <div className="flex items-center mb-4">
                      <img 
                        src={course.instructorImage} 
                        alt={course.instructor} 
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-gray-600 text-sm">{course.instructor}</span>
                    </div>

                    {/* Course Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div>
                        {course.discount ? (
                          <>
                            <span className="text-lg font-bold text-gray-900">{course.discount}</span>
                            <span className="text-sm text-gray-500 line-through ml-2">{course.price}</span>
                          </>
                        ) : (
                          <span className="text-lg font-bold text-gray-900">{course.price}</span>
                        )}
                      </div>
                      <button className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                        View Course <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                  3
                </button>
                <span className="px-2 text-gray-600">...</span>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                  8
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Can't find what you're looking for?</h2>
            <p className="text-xl mb-8">
              We're constantly adding new courses. Let us know what you'd like to learn!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
                Request a Course
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCourse;