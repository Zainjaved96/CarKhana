import React from "react";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // Navbar uses flex-col and sm:flex-row for responsiveness
    <header className="text-gray-400 bg-gray-900 font-poppins">
    <div className="container  justify-between flex flex-wrap p-1 flex-col lg:flex-row items-center gap-3 sm:gap-0">
      <Link className="flex  font-medium  text-white  md:mb-0 cursor-pointer justify-center " to="/">
        <img src={logo} width="40%" alt="" />
      </Link>
      <nav
        className="font-poppins  md:py-1 md:pl-4  cursor-pointer md:border-gray-700 font-semibold flex flex-wrap items-center text-lg justify-center">
        <Link to="/" className="mr-5 cursor-pointer hover:text-carRed">Home</Link>
        <Link to="/vehicles" className="mr-5  cursor-pointer hover:text-carRed">Vehicles</Link>
        <Link to="/vendors" className="mr-5  cursor-pointer hover:text-carRed">Vendors</Link>
        <Link to="/contact" className="mr-5  cursor-pointer hover:text-carRed">Contact</Link>
        <Link to="/about" className="mr-5  cursor-pointer hover:text-carRed">About</Link>
      </nav>
      <div className="buttons flex gap-3 ">
      <Link to="/login" className="  cursor-pointer hover:bg-carRed hover:text-white rounded py-1 px-3">Login</Link>
        <Link to="/signup"
          className="inline-flex items-center border-0 py-1 px-3  hover:bg-carRed hover:text-white rounded   md:mt-0">Sign Up
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
     
    </div>
  </header>



  );
}

export default Navbar;
