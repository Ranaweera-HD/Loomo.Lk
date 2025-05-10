import React from 'react'
import Hero from '../components/Hero'
import LatesCollection from '../components/LatesCollection'
import CarouselWithContent from '../components/CarouselWithContent'

const Home = () => {
  return (
    <div>
      <Hero/>
      {/* <CarouselWithContent/> */}
      <LatesCollection/>
    </div>
  )
}

export default Home
