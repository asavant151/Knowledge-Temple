import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-indigo-100 p-8 flex items-center justify-center">
            <img 
              src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" 
              alt="404 Illustration" 
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
          
          {/* Content Section */}
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <div className="text-center md:text-left">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Oops!!
                <span className="block w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mt-3 mx-auto md:mx-0"></span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We're sorry, but it looks like the page you're looking for doesn't exist or has been moved.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Contact Support
                </a>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center md:text-left">
                  Think this is a mistake?{' '}
                  <a href="#" className="text-blue-600 hover:underline">Let us know</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-100 opacity-20"
            style={{
              width: `${Math.random() * 20 + 5}rem`,
              height: `${Math.random() * 20 + 5}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
