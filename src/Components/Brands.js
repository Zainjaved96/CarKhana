import React from "react";
import suzuki from "../images/Suzuki.png";
import toyota from "../images/Tyota.png";
import honda from "../images/Honda.png";
import bmw from "../images/BMW.png";
import mercedes from "../images/mercedes.png";
import kia from "../images/KIA.png";

function Hero() {
  return (
    <section className=" bg-gray-900   py-4 font-poppins row  container-fluid text-center m-0 pt-  text-white">
      <h1 className="text-3xl mb-4 text-white font-semibold">
        <span className="border-b-2 border-darkRed pb-1">Popular Brands</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-4 items-center ">
        <div className="bg-white rounded cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg ">
          <img src={suzuki} alt="" />
        </div>
        <div className="bg-white rounded cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg">
          <img src={toyota} alt="" />
        </div>
        <div className="bg-white rounded cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg">
          <img src={honda} alt="" />
        </div>
        <div className="bg-white rounded cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg">
          <img src={mercedes} alt="" />
        </div>
        <div className="bg-white rounded cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg">
          <img src={bmw} alt="" />
        </div>
        <div className="bg-white rounded cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg">
          <img src={kia} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
