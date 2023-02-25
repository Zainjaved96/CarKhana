import React from 'react'
import heroImg from '../images/hero.png'

function Hero() {
  return (
   <section className=' py-4 font-poppins row flex-col-reverse md:flex-row container-fluid text-center m-0 pt- bg-gray-900 text-white'>
        <div className="col-lg-6 col-md-12 d-flex justify-center flex-col ">
          <h1 className=' text-[2rem] fw-bold '>Welcome to  <span className='text-carRed'>CarKhana!</span> </h1>
          <p className='text-white text-xl  '>Rent. Drive. Discover.</p>
          <div className="container">
            <button
            className="inline-flex items-center mt-1 bg-carRed border-0 py-1 px-3 focus:outline-none hover:bg-blueBerry hover:text-white rounded text-white ">
              Rent Now 
              </button>
           </div>
         </div>
        <div className="col-lg-6 col-md-12 ">
          <img src={heroImg} alt="" />
        </div>
   </section>
  )
}

export default Hero