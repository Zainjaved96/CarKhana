import React from "react";
import logo from "../images/logo.png"

function Footer() {
  return (
    // Footer Aligned by Flexbox inspired by Phonekar.biz
    <footer className="font-poppins text-gray-900 flex flex-wrap flex-col sm:flex-row text-center sm:text-start justify-around bg-white py-[100px] px-5">
      <div className="sm:text-start ">
        <h1 className="text-2xl">Get in Touch</h1>
        <p className="">Email: contact@carkhaan.com</p>
        <p>Phone: +923034196071</p>
        <p>Address: 32 Street Main Gulberg, lahore, Pakistan</p>
      </div>
      <div className="flex flex-col gap-1">
       <h1 className="text-2xl font-semibold">Pages</h1>
       <a className="text-lg hover:text-carRed cursor-pointer ">Home</a>
       <a className="text-lg hover:text-carRed cursor-pointer ">Vehicles</a>
       <a className="text-lg hover:text-carRed cursor-pointer ">Venders</a>
       <a className="text-lg hover:text-carRed cursor-pointer ">Contact</a>
       <a className="text-lg hover:text-carRed cursor-pointer ">About</a>
      </div>
      <div className="flex flex-col gap-1">

       <h1 className="text-2xl font-semibold">Socials</h1>
       <a className="text-lg hover:text-carRed cursor-pointer ">Facebook</a>
       <a className="text-lg hover:text-carRed cursor-pointer ">Instagram</a>
       <a className="text-lg hover:text-carRed cursor-pointer ">Youtube</a>
       <a className="text-lg hover:text-carRed cursor-pointer ">Whatsapp</a>
       <a className="text-lg hover:text-carRed cursor-pointer ">Twitter</a>
      </div>
      <div className="flex flex-col gap-1">

<h1 className="text-2xl font-semibold">Brands</h1>
<a className="text-lg hover:text-carRed cursor-pointer ">Suzuki</a>
<a className="text-lg hover:text-carRed cursor-pointer ">Honda</a>
<a className="text-lg hover:text-carRed cursor-pointer ">Mercedes</a>
<a className="text-lg hover:text-carRed cursor-pointer ">BMW</a>
<a className="text-lg hover:text-carRed cursor-pointer ">Kia</a>
</div>
      <div> 
            <img src={logo} width="70%" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
