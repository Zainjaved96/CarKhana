import React from "react";
import logo from "../../images/logo.png";

function Footer() {
  return (
    // Footer Aligned by Flexbox inspired by Phonekar.biz
    <footer className="font-poppins text-gray-900 flex flex-wrap flex-col sm:flex-row text-center sm:text-start justify-around bg-white sm:py-[80px] py-5  px-3 lg:px-5">
      <div className="sm:text-start flex flex-col pb-5">
        <div className="flex justify-center text-start">
          <img src={logo} width="50%" alt="" />
        </div>
        <div className="flex flex-col text-start justify-start py-2">
          <p>Email: contact@carkhaan.com</p>
          <p>Phone: +923034196071</p>
          <p>Address: 32 Street Main Gulberg, lahore, Pakistan</p>
        </div>
        <div className="flex flex-col justify-start text-start sm:gap-1.5">
          <div className="div flex flex-row ">
            <a href="/" className="w-10 h-10">
              <img
                alt="social-icon"
                width=""
                src="https://img.icons8.com/color/96/null/facebook-new.png"
              />
            </a>
            <a href="/" className="w-10 h-10">
              <img
                alt="social-icon"
                width=""
                src="https://img.icons8.com/fluency/96/null/instagram-new.png"
              />
            </a>
            <a href="/" className="w-10 h-10">
              <img
                alt="social-icon"
                width=""
                src="https://img.icons8.com/fluency/96/null/twitter.png"
              />{" "}
            </a>
            <a href="/" className="w-10 h-10">
              <img
                alt="social-icon"
                width=""
                src="https://img.icons8.com/fluency/96/null/gmail.png"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start text-start gap-1">
        <h1 className="text-2xl font-semibold">Pages</h1>
        <a
          href="/vehicles"
          className="text-base font-light hover:text-carRed cursor-pointer "
        >
          Home
        </a>
        <a
          href="/vehicles"
          className="text-base font-light hover:text-carRed cursor-pointer "
        >
          Vehicles
        </a>
        <a
          href="/vehicles"
          className="text-base font-light hover:text-carRed cursor-pointer "
        >
          Venders
        </a>
        <a
          href="/vehicles"
          className="text-base font-light hover:text-carRed cursor-pointer "
        >
          Contact
        </a>
        <a
          href="/vehicles"
          className="text-base font-light hover:text-carRed cursor-pointer "
        >
          About
        </a>
      </div>

      <div className="flex flex-col gap-1 justify-start text-start">
        <h1 className="text-2xl font-semibold">Brands</h1>
        <a
          href="/vehicles"
          className="text-base font-light hover:text-carRed cursor-pointer "
        >
          Suzuki
        </a>
        <a
          href="/vehicles"
          className="text-base font-light hover:text-carRed cursor-pointer "
        >
          Honda
        </a>
        <a
          href="/vehicles"
          className="text-base font-light hover:text-carRed cursor-pointer "
        >
          Mercedes
        </a>
        <a
          href="/vehicles"
          className="text-base font-light hover:text-carRed cursor-pointer "
        >
          BMW
        </a>
        <a
          href="/vehicles"
          className="text-base font-light hover:text-carRed cursor-pointer "
        >
          Kia
        </a>
      </div>
    </footer>
  );
}

export default Footer;
