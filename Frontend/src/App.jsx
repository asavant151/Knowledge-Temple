import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Check if user is authenticated (you might want to use a more robust check)
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Public Route Component (only accessible when not authenticated)
const PublicRoute = ({ children }) => {
  if (isAuthenticated()) {
    // Redirect to home if authenticated
    return <Navigate to="/" replace />;
  }
  return children;
};

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/services/tutoring" element={<Tutoring />} />
          <Route path="/services/workshops" element={<WorkshopsPage />} />

          {/* Auth Public Routes (only accessible when not logged in) */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/otp-verification"
            element={
              <PublicRoute>
                <OtpVerification />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />

          {/* Protected Routes (only accessible when logged in) */}
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;