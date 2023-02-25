import React from "react";
import logo from "../images/logo.png"

function Navbar(props) {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
    <div className="container  justify-between flex flex-wrap p-1 flex-col lg:flex-row items-center">
      <a className="flex  font-medium  text-white  md:mb-0 cursor-pointer justify-center ">
        <img src={logo} width="40%" alt="" />
      </a>
      <nav
        className="font-poppins  md:py-1 md:pl-4  cursor-pointer md:border-gray-700 font-semibold flex flex-wrap items-center text-lg justify-center">
        <a href="/" className="mr-5 cursor-pointer hover:text-carRed">Home</a>
        <a href="#team" className="mr-5  cursor-pointer hover:text-carRed">Vehicles</a>
        <a href="#team" className="mr-5  cursor-pointer hover:text-carRed">Vendors</a>
        <a href="#poa" className="mr-5  cursor-pointer hover:text-carRed">Services</a>
        <a href="#poa" className="mr-5  cursor-pointer hover:text-carRed">Contact</a>
        <a href="#poa" className="mr-5  cursor-pointer hover:text-carRed">About</a>
      </nav>
      <div className="buttons flex gap-3">
        <button
          className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-blueBerry hover:text-carRed rounded text-white  md:mt-0">Sign In
        </button>
        <button
          className="inline-flex items-center bg-carRed border-0 py-1 px-3 focus:outline-none hover:bg-blueBerry hover:text-white rounded text-white  md:mt-0">Sign Up
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
     
    </div>
  </header>
  );
}

export default Navbar;
