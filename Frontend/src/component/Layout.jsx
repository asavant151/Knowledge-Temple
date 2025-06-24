import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import BackToTop from "./BackToTop";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Layout;
