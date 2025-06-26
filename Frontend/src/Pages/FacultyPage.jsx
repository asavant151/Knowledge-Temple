import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Globe, 
  Mail, 
  Linkedin, 
  Twitter,
  ChevronRight,
  X,
  Clock,
  User,
  Bookmark,
  MessageSquare,
  Star,
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FacultyPage = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Faculty data
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Computer Science Professor",
      bio: "PhD in Computer Science with 15 years of teaching experience. Specializes in AI and Machine Learning.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      courses: ["Advanced AI", "Machine Learning Fundamentals", "Neural Networks"],
      expertise: ["Artificial Intelligence", "Deep Learning", "Data Science"],
      social: {
        email: "sarah.johnson@knowledgetemple.edu",
        linkedin: "linkedin.com/in/sarahjohnson",
        twitter: "@sarahjohnson"
      }
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Data Science Instructor",
      bio: "Former Data Scientist at Google with 10 years of industry experience. Passionate about teaching practical data skills.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      courses: ["Data Analysis", "Python for Data Science", "Big Data Technologies"],
      expertise: ["Data Visualization", "Statistical Modeling", "Python Programming"],
      social: {
        email: "michael.chen@knowledgetemple.edu",
        linkedin: "linkedin.com/in/michaelchen",
        twitter: "@michaelchen"
      }
    },
    {
      id: 3,
      name: "Dr. Emma Rodriguez",
      role: "UX/UI Design Professor",
      bio: "Award-winning designer with 12 years of experience in product design. Teaches design thinking and user research methodologies.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      courses: ["UX Design Principles", "UI Prototyping", "Design Systems"],
      expertise: ["User Research", "Interaction Design", "Design Systems"],
      social: {
        email: "emma.rodriguez@knowledgetemple.edu",
        linkedin: "linkedin.com/in/emmarodriguez",
        twitter: "@emmarodriguez"
      }
    },
    {
      id: 4,
      name: "Prof. James Wilson",
      role: "Business Strategy Instructor",
      bio: "Former management consultant with expertise in corporate strategy and entrepreneurship.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      courses: ["Business Strategy", "Entrepreneurship", "Corporate Finance"],
      expertise: ["Strategic Planning", "Business Development", "Market Analysis"],
      social: {
        email: "james.wilson@knowledgetemple.edu",
        linkedin: "linkedin.com/in/jameswilson",
        twitter: "@jameswilson"
      }
    }
  ];

  // Stats data
  const stats = [
    { value: "50+", label: "Faculty Members", icon: <GraduationCap className="w-8 h-8" /> },
    { value: "500+", label: "Years Combined Experience", icon: <Award className="w-8 h-8" /> },
    { value: "200+", label: "Courses Offered", icon: <BookOpen className="w-8 h-8" /> },
    { value: "100+", label: "Countries Represented", icon: <Globe className="w-8 h-8" /> }
  ];


  const openFacultyModal = (faculty) => {
    setSelectedFaculty(faculty);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeFacultyModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Meet Our Distinguished Faculty
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Learn from industry experts and academic leaders who are passionate about your success.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12 -mt-10 z-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center text-blue-600 mb-3">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Grid Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Expert Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class instructors with academic excellence and industry experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty) => (
            <div key={faculty.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{faculty.name}</h3>
                    <p className="text-blue-200">{faculty.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">{faculty.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Courses:</h4>
                  <ul className="space-y-1">
                    {faculty.courses.map((course, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4 mt-6">
                  <a 
                    href={`mailto:${faculty.social.email}`} 
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://${faculty.social.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://twitter.com/${faculty.social.twitter}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Faculty Carousel */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Spotlight Faculty</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our most popular instructors
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper pb-12"
          >
            {facultyMembers.map((faculty) => (
              <SwiperSlide key={faculty.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="relative h-48 w-full">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{faculty.name}</h3>
                    <p className="text-blue-600 mb-4">{faculty.role}</p>
                    <p className="text-gray-600 mb-4 line-clamp-3">{faculty.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {faculty.expertise.map((skill, i) => (
                          <span key={i} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => openFacultyModal(faculty)} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Faculty Profile Modal */}
      {isModalOpen && selectedFaculty && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeFacultyModal}
          ></div>
          
          {/* Modal Container */}
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              {/* Modal Content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* Close Button */}
                  <button
                    type="button"
                    className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors"
                    onClick={closeFacultyModal}
                  >
                    <X className="h-5 w-5" />
                  </button>
                  
                  {/* Faculty Image */}
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-32 w-32 rounded-full bg-gray-100 sm:mx-0 sm:h-40 sm:w-40 overflow-hidden">
                    <img
                      src={selectedFaculty.image}
                      alt={selectedFaculty.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  {/* Faculty Info */}
                  <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                    <h3 className="text-2xl leading-6 font-bold text-gray-900">
                      {selectedFaculty.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {selectedFaculty.role}
                    </p>
                    <div className="mt-2 flex justify-center sm:justify-start space-x-4">
                      <a 
                        href={`mailto:${selectedFaculty.social.email}`}
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                        title="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a 
                        href={`https://${selectedFaculty.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href={`https://twitter.com/${selectedFaculty.social.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                        title="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Detailed Information */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Bio Section */}
                  <div className="md:col-span-2">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <User className="w-5 h-5 mr-2 text-blue-600" />
                        About
                      </h4>
                      <p className="text-gray-600">
                        {selectedFaculty.bio}
                      </p>
                    </div>
                    
                    {/* Courses Section */}
                    <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                        Courses Taught
                      </h4>
                      <ul className="space-y-2">
                        {selectedFaculty.courses.map((course, index) => (
                          <li key={index} className="flex items-start">
                            <ChevronRight className="flex-shrink-0 w-4 h-4 text-blue-500 mt-1 mr-2" />
                            <span className="text-gray-600">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Expertise & Stats */}
                  <div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-blue-600" />
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedFaculty.expertise.map((skill, index) => (
                          <span 
                            key={index} 
                            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-blue-600" />
                        At a Glance
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Years Teaching</p>
                          <p className="font-medium">10+ years</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Student Rating</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-600">4.8/5</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Students Taught</p>
                          <p className="font-medium">2,500+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modal Footer */}
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Message
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                  onClick={closeFacultyModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Joining Our Faculty?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented educators to join our team
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Apply Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;