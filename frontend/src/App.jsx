import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/Placeorder'
import Orders from './pages/Orders'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
