import React from 'react'
import Navbar from './Public/Navbar';
import Footer from './Public/Footer';
import Home from './Public/home';
import Category from './Public/Category';
import AboutUs from './Public/AboutUs';
import { Routes, Route } from 'react-router-dom';
import Cart from "./Protected/Cart"
import User from "./Protected/User"




const Public = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Category' element={<Category />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/User' element={<User />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default Public;
