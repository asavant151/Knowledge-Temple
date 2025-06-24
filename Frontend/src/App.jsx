import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet
} from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import OtpVerification from "./Pages/OtpVerification";
import ResetPassword from "./Pages/ResetPassword";
import ComingSoon from "./component/ComingSoon";
import AccountPage from "./Pages/AccountPage";
import CourseDetail from "./Pages/CourseDetail";
import FacultyPage from "./Pages/FacultyPage";
import CoursePage from "./Pages/CoursePage";
import Tutoring from "./Pages/Tutoring";
import WorkshopsPage from "./Pages/WorkshopsPage";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "./Pages/Wishlist";
import OnlineCourse from "./Pages/OnlineCourse";
import AdminLayout from "./AdminPanel/AdminLayout";
import Dashboard from "./AdminPanel/Dashboard";
import Users from "./AdminPanel/Users";
import Courses from "./AdminPanel/Courses";
import Settings from "./AdminPanel/Settings";

// Authentication check functions
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const isAdmin = () => {
  // You might want to add role checking here
  return localStorage.getItem("role") === "admin";
};

// Route protection components
const ProtectedRoute = ({ children, adminOnly = false }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  
  if (adminOnly && !isAdmin()) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

const PublicRoute = ({ children }) => {
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Website routes component
const WebsiteRoutes = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

// Admin routes component
const AdminRoutes = () => {
  return (
    <ProtectedRoute adminOnly>
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    </ProtectedRoute>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer />
      <Routes>
        {/* Website Routes */}
        <Route element={<WebsiteRoutes />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="coming-soon" element={<ComingSoon />} />
          <Route path="course-detail/:id" element={<CourseDetail />} />
          <Route path="faculty" element={<FacultyPage />} />
          <Route path="courses" element={<CoursePage />} />
          <Route path="services/tutoring" element={<Tutoring />} />
          <Route path="services/workshops" element={<WorkshopsPage />} />
          <Route path="services/online" element={<OnlineCourse />} />
          
          {/* Auth Public Routes */}
          <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
          <Route path="otp-verification" element={<PublicRoute><OtpVerification /></PublicRoute>} />
          <Route path="reset-password" element={<PublicRoute><ResetPassword /></PublicRoute>} />
          
          {/* Protected User Routes */}
          <Route path="account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
          <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
        </Route>

        {/* Admin Routes */}
        <Route path="admin" element={<AdminRoutes />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="courses" element={<Courses />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;