import React from 'react';
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
  ChevronRight
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FacultyPage = () => {
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

                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

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