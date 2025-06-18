import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Globe, 
  Award, 
  Clock, 
  ChevronDown,
  ChevronUp,
  Star,
  ArrowRight
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
  // FAQ Accordion State
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const navigate = useNavigate();

  // Reviews Data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Web Developer",
      comment: "KnowledgeTemple transformed my career. The courses are comprehensive and taught by industry experts.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist",
      comment: "The hands-on projects helped me build a portfolio that got me hired within 3 months of completing the course.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "UX Designer",
      comment: "I appreciated the flexible learning schedule that allowed me to balance work and studies effectively.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      id: 4,
      name: "Alex Johnson",
      role: "UX Designer",
      comment: "I appreciated the flexible learning schedule that allowed me to balance work and studies effectively.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/64.jpg"
    },
    {
      id: 5,
      name: "Tommy Smith",
      role: "UX Designer",
      comment: "I appreciated the flexible learning schedule that allowed me to balance work and studies effectively.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 6,
      name: "John Doe",
      role: "UX Designer",
      comment: "I appreciated the flexible learning schedule that allowed me to balance work and studies effectively.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/66.jpg"
    }
  ];

  // Services Data
  const services = [
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      title: "Comprehensive Courses",
      description: "200+ courses across various disciplines with regularly updated content."
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience."
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: "Global Community",
      description: "Connect with learners from 100+ countries worldwide."
    },
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: "Certification",
      description: "Earn recognized certificates upon course completion."
    }
  ];

  // Courses Data
  const courses = [
    {
      id: 1,
      title: "Advanced JavaScript",
      description: "Master modern JavaScript frameworks and build interactive web applications.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      price: "$99",
      discount: "$79"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Learn data analysis, visualization, and machine learning basics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: "$129",
      discount: "$99"
    },
    {
      id: 3,
      title: "UX/UI Design Masterclass",
      description: "Create stunning user interfaces and enhance user experience.",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: "$149",
      discount: "$119"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Simply browse our course catalog, select your desired course, and click 'Enroll Now'. You'll be guided through the payment process and gain immediate access to the course materials."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Yes, our platform is fully responsive and works on all devices including smartphones and tablets. You can even download lessons for offline viewing."
    },
    {
      question: "What if I need help during my course?",
      answer: "We offer multiple support channels including discussion forums, live Q&A sessions with instructors, and email support for technical issues."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Yes, our certificates are widely recognized in the industry. Many of our students have used them to advance their careers or find new jobs."
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Transform Your Future with <span className="text-yellow-300">KnowledgeTemple</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Join thousands of learners worldwide gaining in-demand skills from industry experts.
              </p>
              <div className="flex space-x-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 md:px-8 px-4 rounded-lg transition duration-300">
                  Explore Courses
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 md:px-8 px-4 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Students learning" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-bold mb-6">About KnowledgeTemple</h2>
            <p className="text-lg mb-6 text-gray-600">
              Founded in 2015, KnowledgeTemple has grown to become a leading online learning platform with over 500,000 students worldwide. Our mission is to make quality education accessible to everyone, everywhere.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">500K+ Students</h3>
                  <p className="text-gray-600">Joined our learning community</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">200+ Courses</h3>
                  <p className="text-gray-600">Across various disciplines</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Industry Recognized</h3>
                  <p className="text-gray-600">Certificates upon completion</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              alt="Classroom" 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              alt="Learning" 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Graduation" 
              className="rounded-lg shadow-md h-64 w-full object-cover col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose KnowledgeTemple?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the best learning experience with cutting-edge technology and proven teaching methods.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Features" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
                    <p className="text-gray-600">
                      Learn at your own pace with 24/7 access to course materials and lifetime access to purchased courses.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                    <p className="text-gray-600">
                      Learn from industry professionals who bring real-world experience to their teaching.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                    <p className="text-gray-600">
                      Join a network of learners from around the world and collaborate on projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Popular Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start learning with our most popular courses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {course.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 line-through">{course.price}</span>
                    <button onClick={() => navigate('/coming-soon')} className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                      View Course <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              View All Courses
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our platform
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 last:border-0">
              <button
                className="flex justify-between items-center w-full py-5 text-left font-semibold text-lg hover:text-blue-600 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-5' : 'max-h-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our global community of learners
            </p>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper pb-12"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-gray-500 text-sm">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{review.comment}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of students advancing their careers with KnowledgeTemple
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;