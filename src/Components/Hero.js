import React from "react";
import hero from "../images/hero.png";

function Hero() {
  return (
    <section className="text-white bg-gray-900 font-poppins">
      <div className="container mx-auto justify-center flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="order-1 0 g:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 border-b-2 border-darkRed pb-2 font-medium text-white text-left ">
            Looking to Save more <br /> on your Rental Car?
          </h1>

          <hr className="text-red-800" />

          <p className="mb-8 leading-relaxed text-left">
            Introducing Carkhana, One place for all your rental needs. whether
            it is going to murree with your boys or a one day outing with your
            family. We've got you covered.
          </p>
          <div className="flex justify-center">
            <a
              href="/"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-carRed hover:text-white rounded text-lg"
            >
              Rent Now
            </a>
          </div>
        </div>
        <div className=" sm:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
            alt="hero"
            src={hero}
            width="100%"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
