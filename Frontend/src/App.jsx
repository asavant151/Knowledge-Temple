import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/services/tutoring" element={<Tutoring />} />
          <Route path="/services/workshops" element={<WorkshopsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
