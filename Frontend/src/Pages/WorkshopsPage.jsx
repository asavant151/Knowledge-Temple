import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Calendar, Clock, MapPin, Users, ArrowRight, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const WorkshopsPage = () => {
  // Upcoming workshops data
  const upcomingWorkshops = [
    {
      id: 1,
      title: "UI/UX Design Masterclass",
      date: "2023-11-15",
      time: "10:00 AM - 4:00 PM",
      location: "Online",
      instructor: "Sarah Johnson",
      seats: 25,
      price: "$149",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Learn the latest design trends and tools from industry experts in this intensive one-day workshop."
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      date: "2023-11-22",
      time: "9:00 AM - 5:00 PM",
      location: "New York Campus",
      instructor: "Michael Chen",
      seats: 15,
      price: "$199",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Hands-on introduction to data analysis, visualization, and machine learning basics."
    },
    {
      id: 3,
      title: "Digital Marketing Intensive",
      date: "2023-12-05",
      time: "11:00 AM - 3:00 PM",
      location: "Online",
      instructor: "Emma Rodriguez",
      seats: 30,
      price: "$129",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      description: "Master social media marketing, SEO, and content strategy in this practical workshop."
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      date: "2023-12-12",
      time: "10:00 AM - 6:00 PM",
      location: "San Francisco Campus",
      instructor: "David Wilson",
      seats: 20,
      price: "$249",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Build a complete web application using modern frameworks in this intensive workshop."
    }
  ];

  // Past workshops testimonials
  const testimonials = [
    {
      id: 1,
      name: "Jessica Lee",
      role: "Graphic Designer",
      comment: "The UI/UX workshop completely transformed my design approach. The hands-on exercises were incredibly valuable.",
      rating: 5,
      workshop: "UI/UX Design Masterclass"
    },
    {
      id: 2,
      name: "Robert Kim",
      role: "Marketing Specialist",
      comment: "I applied the digital marketing strategies immediately after the workshop and saw a 40% increase in engagement.",
      rating: 4,
      workshop: "Digital Marketing Intensive"
    },
    {
      id: 3,
      name: "Daniel Park",
      role: "Software Engineer",
      comment: "The instructor's depth of knowledge was impressive. I learned more in this one-day workshop than in months of self-study.",
      rating: 5,
      workshop: "Web Development Bootcamp"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Interactive Workshops</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Hands-on learning experiences with industry experts to boost your skills
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Browse Workshops
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Workshops</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our interactive sessions led by industry professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {upcomingWorkshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={workshop.image} 
                  alt={workshop.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold text-xl">{workshop.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{workshop.time}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{workshop.seats} seats</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold text-lg">{workshop.price}</span>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                    Register <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Attend Our Workshops?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get more than just theoretical knowledge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of practical experience in their fields.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hands-on Learning</h3>
              <p className="text-gray-600">
                Practical exercises and real-world projects to apply what you learn immediately.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Networking</h3>
              <p className="text-gray-600">
                Connect with like-minded professionals and expand your industry network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Participants Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from past workshop attendees about their experiences
          </p>
        </div>
        
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-2">"{testimonial.comment}"</p>
                <p className="text-sm text-blue-600 font-medium">{testimonial.workshop}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Skills?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Limited seats available for our upcoming workshops. Register today to secure your spot.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
            View All Workshops
          </button>
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;