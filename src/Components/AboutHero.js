import React from 'react'
import about from "../images/about-hero.png"
function AboutHero() {
  return (
    <section className="text-white bg-gray-900 font-poppins">
    {/* using Flex for aligning */}
      <div className="container mx-auto justify-center flex px-5 py-24 md:flex-row flex-col items-center">
      {/* Using order property to switch order on mobile device */}
        <div className="order-1  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 border-b-2 border-darkRed pb-2 font-medium text-white text-left ">
          About Us
          </h1>

          <hr className="text-red-800" />

          <p className="mb-8 leading-relaxed text-left">
          At CarKhana, we believe that renting a car should be a hassle-free experience. That's why we offer a wide selection of quality vehicles at competitive prices, with friendly and knowledgeable staff ready to assist you every step of the way.
          </p>
         
        </div>
        <div className=" sm:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
            alt="hero"
            src={about}
            width="100%"
          />
        </div>
      </div>
    </section>
  )

}

export default AboutHero