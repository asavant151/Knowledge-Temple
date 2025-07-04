import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  BookOpen,
  GraduationCap,
  Users,
  Phone,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Check auth status on component mount
    checkAuthStatus();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownOpen && !event.target.closest('.relative')) {
        setUserDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [userDropdownOpen]);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");

    if (token) {
      setIsLoggedIn(true);
      setUserData({
        name: name || "",
        email: email || "",
      });
    } else {
      setIsLoggedIn(false);
      setUserData({
        name: "",
        email: "",
      });
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = isDrawerOpen ? "auto" : "hidden";
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const handleLogout = () => {
    // Clear all user-related data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");

    // Reset state
    setIsLoggedIn(false);
    setUserData({
      name: "",
      email: "",
    });
    setUserDropdownOpen(false);

    // Redirect to login page
    navigate("/login");
  };

  const navItems = [
    { name: "Home", icon: <Home className="w-5 h-5" />, path: "/" },
    { name: "About", icon: <Users className="w-5 h-5" />, path: "/about" },
    {
      name: "Services",
      icon: <GraduationCap className="w-5 h-5" />,
      path: "/services",
      subItems: [
        { name: "Online Courses", path: "/services/online" },
        { name: "Workshops", path: "/services/workshops" },
        { name: "Tutoring", path: "/services/tutoring" },
      ],
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
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <img
                src="../assets/images/logoweb.jpeg"
                alt="logo"
                className="w-12 h-12 rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Knowledge Temple
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.path}
                  className="flex items-center px-4 py-2.5 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium rounded-lg group"
                >
                  <span className="mr-1.5">{item.icon}</span>
                  {item.name}
                  {item.subItems && (
                    <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" />
                  )}
                </a>
                {item.subItems && (
                  <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoggedIn ? (
              <div className="relative ml-2">
                <button
                  onClick={toggleUserDropdown}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-lg font-medium"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-blue-600 hover:text-blue-800 font-semibold">
                    {userData.name ? (
                      userData.name.charAt(0).toUpperCase()
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {/* <div className="px-4 py-2 border-b">
                      <p className="font-medium text-gray-900 truncate">
                        {userData.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {userData.email}
                      </p>
                    </div> */}
                    <Link
                      to="/account"
                      className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      My Account
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/register"
                className="ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleDrawer}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isDrawerOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed h-screen inset-y-0 left-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-3">
              <img
                src="../assets/images/logoweb.jpeg"
                alt="logo"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Knowledge Temple
              </span>
            </div>
            <button
              onClick={toggleDrawer}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="mb-1">
                <a
                  href={item.path}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={toggleDrawer}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {item.subItems && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.subItems && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.path}
                        className="block py-2.5 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                        onClick={toggleDrawer}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Mobile auth buttons */}
            {isLoggedIn ? (
              <>
                <Link
                  to="/account"
                  className="flex items-center p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={toggleDrawer}
                >
                  <User className="w-5 h-5 mr-3" />
                  <span className="font-medium">My Account</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleDrawer();
                  }}
                  className="w-full flex items-center p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  <span className="font-medium">Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/register"
                className="block w-full mt-4 px-6 py-3 text-center font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-100 transition-all"
                onClick={toggleDrawer}
              >
                Get Started
              </Link>
            )}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleDrawer}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
