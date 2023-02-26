import React from 'react'
import Hero from "../Components/Hero"
import Navbar from '../Components/Navbar'
import Brands from '../Components/Brands'
import FeaturedCars from '../Components/FeaturedCars'
import Features from '../Components/Features'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
        {/* <Navbar/> */}
        <Hero/>
        <Brands/>
        <FeaturedCars/>
        <Features/>
        {/* <Footer/> */}
    </>
   
   
   
  )
}

export default Home