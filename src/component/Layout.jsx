import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import BackToTop from './BackToTop'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <BackToTop />
      <Footer />
    </div>
  )
}

export default Layout
