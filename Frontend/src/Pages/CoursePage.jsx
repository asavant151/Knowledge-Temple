import React, { useState } from 'react';
import { BookOpen, Clock, Users, Star, Award, Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');

  // Course categories
  const categories = [
    'All Courses',
    'Web Development',
    'Data Science',
    'Mobile Development',
    'UI/UX Design',
    'Business',
    'Marketing'
  ];

  const navigate = useNavigate();

  // Courses data
  const courses = [
    {
      id: 1,
      title: "Advanced JavaScript Masterclass",
      category: "Web Development",
      instructor: "Sarah Johnson",
      duration: "32 hours",
      students: 1250,
      rating: 4.9,
      price: "$149",
      discount: "$99",
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Master modern JavaScript frameworks and build interactive web applications with this comprehensive course.",
      whatYouLearn: [
        "Advanced JavaScript concepts",
        "ES6+ features",
        "Functional programming",
        "Async programming",
        "Building real-world projects"
      ]
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      category: "Data Science",
      instructor: "Michael Chen",
      duration: "45 hours",
      students: 980,
      rating: 4.8,
      price: "$179",
      discount: "$129",
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Learn data analysis, visualization, and machine learning basics from industry experts.",
      whatYouLearn: [
        "Python for data science",
        "Data visualization",
        "Machine learning basics",
        "Statistical analysis",
        "Real-world case studies"
      ]
    },
    {
      id: 3,
      title: "UX/UI Design Masterclass",
      category: "UI/UX Design",
      instructor: "Emma Rodriguez",
      duration: "28 hours",
      students: 2100,
      rating: 4.95,
      price: "$199",
      discount: "$149",
      isAvailable: false,
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Create stunning user interfaces and enhance user experience with this comprehensive design course.",
      whatYouLearn: [
        "UI design principles",
        "UX research methods",
        "Prototyping tools",
        "Design systems",
        "Portfolio creation"
      ]
    },
    {
      id: 4,
      title: "React Native Mobile Development",
      category: "Mobile Development",
      instructor: "David Kim",
      duration: "36 hours",
      students: 870,
      rating: 4.7,
      price: "$169",
      discount: "$119",
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Build cross-platform mobile applications with React Native and JavaScript.",
      whatYouLearn: [
        "React Native fundamentals",
        "Navigation patterns",
        "State management",
        "Native modules",
        "App deployment"
      ]
    },
    {
      id: 5,
      title: "Digital Marketing Strategy",
      category: "Marketing",
      instructor: "Lisa Wong",
      duration: "24 hours",
      students: 1500,
      rating: 4.6,
      price: "$139",
      discount: "$99",  
      isAvailable: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Develop effective digital marketing strategies that drive results for businesses.",
      whatYouLearn: [
        "SEO best practices",
        "Social media marketing",
        "Content strategy",
        "Email marketing",
        "Analytics & measurement"
      ]
    },
    {
      id: 6,
      title: "Python for Beginners",
      category: "Web Development",
      instructor: "Alex Morgan",
      duration: "20 hours",
      students: 3200,
      rating: 4.8,
      price: "$99",
      discount: "$69",
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      description: "Learn Python programming from scratch with hands-on exercises and projects.",
      whatYouLearn: [
        "Python syntax basics",
        "Data structures",
        "Functions & modules",
        "File handling",
        "Simple projects"
      ]
    }
  ];

  const filteredCourses = selectedCategory === 'All Courses' 
  ? courses 
  : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Courses</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Discover the perfect course to advance your career and skills
          </p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full py-4 px-6 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Categories Filter */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
          {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition duration-300 shadow-sm ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {course.discount}
                  <span className="ml-1 text-xs line-through opacity-80">{course.price}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-xs text-white bg-blue-600 px-2 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                    <Star className="w-4 h-4 fill-yellow-500 mr-1" />
                    {course.rating}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center mr-4">
                    <Users className="w-4 h-4 mr-1" /> {course.students.toLocaleString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> {course.duration}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">By {course.instructor}</span>
                  <button onClick={() => course.isAvailable 
                        ? navigate(`/course-detail/${course.id}`) 
                        : navigate('/coming-soon')} className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                     {course.isAvailable ? 'View Details' : 'Coming Soon'} <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Course */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Featured Course"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="ml-4 flex items-center text-yellow-600">
                  <Star className="w-4 h-4 fill-yellow-500 mr-1" />
                  4.95 (1,240 reviews)
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Full Stack Web Development Bootcamp</h2>
              <p className="text-gray-600 mb-6">
                Become a full-stack developer in just 12 weeks with our intensive bootcamp. Learn front-end and back-end technologies to build complete web applications.
              </p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">What you'll learn:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "HTML, CSS, JavaScript",
                    "React.js framework",
                    "Node.js & Express",
                    "Database design",
                    "RESTful APIs",
                    "Authentication",
                    "Deployment",
                    "Project management"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-600">$299</span>
                  <span className="ml-2 text-gray-400 line-through">$499</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <nav className="flex flex-wrap items-center space-x-2">
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
              2
            </button>
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
              3
            </button>
            <span className="px-2">...</span>
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
              8
            </button>
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
              Next
            </button>
          </nav>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Can't find what you're looking for?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team can help you find the perfect course for your needs
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;