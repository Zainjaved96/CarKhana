import React from "react";
import alto from "../../images/Alto.jpg";
import civic from "../../images/civic.jpg";
import swift from "../../images/swift.png";
import landCruisor from "../../images/landCruiser.png";
import { Link } from "react-router-dom";
function FeaturedCars() {
  
  return (
    // Aligned With Flexbox 
    <div className="bg-gray-900  font-poppins text-white py-5 px-3">
      <h1 className="text-3xl pb-4 pt-1 text-white font-semibold">
        <span className="border-b-2 border-darkRed pb-1">Most Rented Cars</span>
      </h1>
      <div className="flex flex-wrap justify-center  py-1 gap-5 ">
        <div className="pb-2  bg-white text-carRed text-center hover:cursor-pointer rounded hover:shadow-lg">
          <img src={alto} className="rounded w-[233px] h-[174px]" alt="" />
          <h1 className="text-xl text-gray-800 font-semibold">Suzuki Alto</h1>
          <p className="text-sm font-extrabold text-muted">PKR 3k-5k/day</p>
          <div className="flex justify-center py-2">
            <button
             
              className=" inline-flex text-white font-semibold bg-carRed border-0 py-2 px-6 focus:outline-none hover:bg-darkRed hover:text-white rounded text-lg"
            >
              Rent Now
            </button>
          </div>
          
        </div>
        <div className=" bg-white text-carRed text-center hover:cursor-pointer rounded hover:shadow-lg">
          <img src={civic} className="rounded w-[233px] h-[174px]" alt="" />
          <h1 className="text-xl text-gray-800 font-semibold">Honda Civic</h1>
          <p className="text-sm font-extrabold text-muted">PKR 15k-20k/day</p>
          <div className="flex justify-center py-2">
            <button
              
              className=" inline-flex text-white font-semibold bg-carRed border-0 py-2 px-6 focus:outline-none hover:bg-darkRed hover:text-white rounded text-lg"
            >
              Rent Now
            </button>
          </div>
          
        </div>
        <div className=" bg-white text-carRed text-center hover:cursor-pointer rounded hover:shadow-lg">
          <img src={swift} className="rounded w-[233px] h-[174px]" alt="" />
          <h1 className="text-xl text-gray-800 font-semibold">Suzuki Swift</h1>
          <p className="text-sm font-extrabold text-muted">PKR 8k-12k/day</p>
          <div className="flex justify-center py-2">
            <button
              
              className=" inline-flex text-white font-semibold bg-carRed border-0 py-2 px-6 focus:outline-none hover:bg-darkRed hover:text-white rounded text-lg"
            >
              Rent Now
            </button>
          </div>
        </div>
        <div className=" bg-white text-carRed text-center hover:cursor-pointer rounded hover:shadow-lg">
          <img
            src={landCruisor}
            className="rounded w-[233px] h-[174px]"
            alt=""
          />
          <h1 className="text-xl text-gray-800 font-semibold">
            Toyota Land cruiser
          </h1>
          <p className="text-sm font-extrabold text-muted">PKR 25k-30k/day</p>
          <div className="flex justify-center py-2">
            <button
              
              className=" inline-flex text-white font-semibold bg-carRed border-0 py-2 px-6 focus:outline-none hover:bg-darkRed hover:text-white rounded text-lg"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <Link
          to="/vehicles"
          className=" inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-carRed hover:text-white rounded text-lg"
        >
          Explore All
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCars;
