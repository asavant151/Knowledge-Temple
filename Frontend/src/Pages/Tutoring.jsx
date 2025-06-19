import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  User,
  BookOpen,
  Clock,
  Calendar,
  Video,
  Award,
  ChevronDown,
  ChevronUp,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const Tutoring = () => {
  // Accordion state
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Tutors data
  const tutors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      experience: "10+ years",
      rating: 4.9,
      sessions: 1200,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "PhD in Applied Mathematics with a passion for making complex concepts simple.",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      subject: "Computer Science",
      experience: "8 years",
      rating: 4.8,
      sessions: 950,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Former Google engineer specializing in algorithms and data structures.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      subject: "English Literature",
      experience: "6 years",
      rating: 4.7,
      sessions: 750,
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      bio: "Oxford graduate with expertise in classic and contemporary literature.",
    },
  ];

  // Subjects offered
  const subjects = [
    { name: "Mathematics", icon: "🧮" },
    { name: "Physics", icon: "⚛️" },
    { name: "Chemistry", icon: "🧪" },
    { name: "Biology", icon: "🧬" },
    { name: "Computer Science", icon: "💻" },
    { name: "English", icon: "📖" },
    { name: "History", icon: "🏛️" },
    { name: "Economics", icon: "📈" },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "James Wilson",
      comment:
        "My math grades improved from C to A in just 3 months of tutoring!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia Martinez",
      comment:
        "The computer science tutor helped me land my dream internship at Amazon.",
      rating: 5,
    },
    {
      id: 3,
      name: "David Kim",
      comment:
        "Flexible scheduling and excellent teaching methods. Highly recommend!",
      rating: 4,
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "How do I schedule a tutoring session?",
      answer:
        "Simply browse our tutors, select one that matches your needs, and click 'Book Session'. You'll be able to choose from available time slots.",
    },
    {
      question: "What technology do I need for online tutoring?",
      answer:
        "You'll need a computer or tablet with a webcam, microphone, and stable internet connection. We recommend using Chrome or Firefox browsers.",
    },
    {
      question: "Can I get help with specific homework assignments?",
      answer:
        "Absolutely! Our tutors can help you understand concepts needed to complete assignments, though we don't do the work for you.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Personalized{" "}
                <span className="text-yellow-300">1-on-1 Tutoring</span> That
                Gets Results
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Connect with expert tutors in 50+ subjects. 94% of students see
                grade improvements within 4 weeks.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300">
                  Find Your Tutor
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  How It Works
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Tutoring session"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How Our Tutoring Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to get the academic help you need
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Choose Your Tutor</h3>
            <p className="text-gray-600">
              Browse profiles and select the perfect tutor based on subject,
              availability, and student reviews.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">2. Schedule Sessions</h3>
            <p className="text-gray-600">
              Book sessions at times that work for you - days, evenings, or
              weekends.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Learn Online</h3>
            <p className="text-gray-600">
              Connect via our virtual classroom with interactive whiteboard and
              video chat.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects Offered */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Subjects We Cover</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              50+ subjects from elementary to university level
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center hover:border-blue-200 border border-transparent"
              >
                <span className="text-3xl mb-3 block">{subject.icon}</span>
                <h3 className="font-semibold">{subject.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center justify-center mx-auto">
              View All Subjects <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Expert Tutors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highly qualified professionals passionate about teaching
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{tutor.name}</h3>
                    <p className="text-blue-600">{tutor.subject}</p>
                  </div>
                  <div className="bg-blue-50 px-3 py-1 rounded-full text-sm font-semibold text-blue-700">
                    {tutor.rating} ★
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{tutor.bio}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> {tutor.experience}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" /> {tutor.sessions}+
                    sessions
                  </span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
            View All Tutors
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Our Tutoring?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Personalized Learning
                    </h3>
                    <p className="text-gray-600">
                      Customized lessons tailored to your learning style and
                      pace.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Expert Tutors</h3>
                    <p className="text-gray-600">
                      All tutors are vetted professionals with teaching
                      experience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Flexible Scheduling
                    </h3>
                    <p className="text-gray-600">
                      Book sessions when it's convenient for you, 24/7
                      availability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Interactive Tools</h3>
                    <p className="text-gray-600">
                      Virtual whiteboard, screen sharing, and document
                      collaboration.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1580894732930-0bab4eef8643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Tutoring benefits"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who achieved their academic goals
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper pb-12"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">Student</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our tutoring services
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-semibold text-lg hover:bg-gray-50 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-96 pb-6 px-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Boost Your Learning?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get matched with your perfect tutor today. First session
            satisfaction guaranteed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Find Your Tutor
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutoring;
