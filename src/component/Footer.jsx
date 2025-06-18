import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo and About */}
          <div className="space-y-6">
            <div className="flex items-center">
            <img
                src="../assets/images/logoweb.jpeg"
                alt="logo"
                className="w-12 h-12 rounded-lg transition-transform duration-300 group-hover:scale-105 mr-2"
              />
              <span className="text-2xl font-bold">KnowledgeTemple</span>
            </div>
            <p className="text-gray-400">
              Empowering learners worldwide with quality education since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Popular Courses</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start">
                  <GraduationCap className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                  <span>Advanced JavaScript Programming</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start">
                  <GraduationCap className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                  <span>Data Science Fundamentals</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start">
                  <GraduationCap className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                  <span>UX/UI Design Masterclass</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start">
                  <GraduationCap className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                  <span>Digital Marketing Certification</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">123 Education Street, Learning City, LC 10101</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">info@knowledgetemple.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 mb-12 border-t border-gray-800 pt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates on new courses, special offers, and educational resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KnowledgeTemple. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;