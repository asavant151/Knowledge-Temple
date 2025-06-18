import React from 'react';
import { 
  Users, 
  BookOpen, 
  Award, 
  Globe, 
  GraduationCap,
  Clock,
  ChevronRight
} from 'lucide-react';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Academic Officer",
      bio: "PhD in Education with 15+ years of teaching experience at top universities.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Director of Technology",
      bio: "Former Google engineer passionate about making education accessible through technology.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Head of Student Success",
      bio: "Dedicated to creating supportive learning environments for all students.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    }
  ];

  // Milestones data
  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description: "KnowledgeTemple launched with 5 courses and 3 instructors"
    },
    {
      year: "2018",
      title: "10K Students",
      description: "Reached our first major milestone of 10,000 enrolled students"
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Courses translated to 5 languages with students from 50+ countries"
    },
    {
      year: "2023",
      title: "500K+ Students",
      description: "Became one of the leading online learning platforms worldwide"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About KnowledgeTemple</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering learners worldwide through accessible, high-quality education since 2015
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom-left"></div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              alt="Our Mission" 
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 mb-6">
              At KnowledgeTemple, we believe education should be accessible to everyone, regardless of location or financial circumstances. Our mission is to break down barriers to learning and empower individuals to transform their lives through knowledge.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We envision a world where anyone with internet access can develop the skills they need to succeed in today's rapidly evolving job market. By partnering with top instructors and industry leaders, we create learning experiences that are both engaging and effective.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 p-4 rounded-lg flex-1 min-w-[200px]">
                <h3 className="font-semibold text-blue-800 mb-2">Accessibility</h3>
                <p className="text-gray-600">Courses designed for all learning styles</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex-1 min-w-[200px]">
                <h3 className="font-semibold text-blue-800 mb-2">Quality</h3>
                <p className="text-gray-600">Rigorous standards for all content</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex-1 min-w-[200px]">
                <h3 className="font-semibold text-blue-800 mb-2">Community</h3>
                <p className="text-gray-600">Global network of learners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">500K+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Courses Available</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate educators and innovators driving our mission forward
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <button className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
                  View profile <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
            
            {/* Milestones */}
            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                        <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                          <h3 className="text-xl font-semibold text-blue-600 mb-2">{milestone.year}</h3>
                          <h4 className="text-lg font-medium mb-2">{milestone.title}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-12 hidden md:block">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mx-auto relative -right-6"></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/2 md:pr-12 hidden md:block">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mx-auto relative -left-6"></div>
                      </div>
                      <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                        <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                          <h3 className="text-xl font-semibold text-blue-600 mb-2">{milestone.year}</h3>
                          <h4 className="text-lg font-medium mb-2">{milestone.title}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-colors">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Learning First</h3>
            <p className="text-gray-600">
              We prioritize effective learning outcomes above all else, continuously improving our teaching methods.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-colors">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Student Centered</h3>
            <p className="text-gray-600">
              Every decision we make focuses on creating the best possible experience for our students.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-colors">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
            <p className="text-gray-600">
              We're committed to making quality education accessible worldwide, breaking down geographic barriers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Learning Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking to learn new skills or share your knowledge, we'd love to have you with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Explore Courses
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Teach With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;