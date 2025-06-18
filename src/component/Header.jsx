import { useState } from "react";
import {
  Menu,
  X,
  Home,
  BookOpen,
  GraduationCap,
  Users,
  Phone,
} from "lucide-react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navItems = [
    { name: "Home", icon: <Home className="w-5 h-5" />, path: "/" },
    { name: "About", icon: <Users className="w-5 h-5" />, path: "/about" },
    {
      name: "Services",
      icon: <GraduationCap className="w-5 h-5" />,
      path: "/services",
    },
    { name: "Faculty", icon: <Users className="w-5 h-5" />, path: "/faculty" },
    {
      name: "Courses",
      icon: <BookOpen className="w-5 h-5" />,
      path: "/courses",
    },
    { name: "Contact", icon: <Phone className="w-5 h-5" />, path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Breadcrumb */}
          <div className="flex items-center justify-between md:w-auto w-full">
            <div className="flex items-center space-x-2">
              <img
                src="../assets/images/logoweb.jpeg"
                alt="logo"
                className="w-12 h-12"
              />
              <h1 className="text-xl font-bold text-blue-600 ml-2 hidden md:block">
                Knowledge Temple
              </h1>
            </div>

            <button
              onClick={toggleDrawer}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors ml-4"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                {item.icon}
                <span className="text-md">{item.name}</span>
              </a>
            ))}
            <a
              href="#"
              className="text-white bg-[#3867a8] px-4 py-2 rounded-[50px] hover:bg-blue-600 transition-colors text-sm"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Drawer */}
          <div
            className={`fixed inset-y-0 left-0 md:w-64 w-full bg-white shadow-lg transform ${
              isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-50 md:hidden`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center justify-between">
                <img
                  src="../assets/images/logoweb.jpeg"
                  alt="logo"
                  className="w-10 h-10"
                />
                <h2 className="text-md font-bold text-blue-600 ml-2">
                  Knowledge Temple
                </h2>
              </div>
              <button
                onClick={toggleDrawer}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors flex items-center space-x-3"
                  onClick={toggleDrawer}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
              <a
                href="#"
                className="text-white bg-[#3867a8] px-4 py-2 rounded-[50px] hover:bg-blue-600 transition-colors text-sm w-fit"
              >
                Get Started
              </a>
            </nav>
          </div>

          {/* Overlay */}
          {isDrawerOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
              onClick={toggleDrawer}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
