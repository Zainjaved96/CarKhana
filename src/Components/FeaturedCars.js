import React from "react";
import alto from "../images/AltoOut.jpg"
import civic from "../images/Honda_Civic_Front_Right_Angled.jpg"
import swift from "../images/Product-Card.png"
import landCruisor from "../images/Land_Cruiser_300_-_PNG.png"

function FeaturedCars() {

  const style = {
    width:"32rem"
  }  
  return (
    <div className="bg-gray-900 font-poppins text-white container mt-5">
      <h1 className="text-3xl pb-4 pt-1 text-white font-semibold">
        <span className="border-b-2 border-darkRed pb-1">Featured Cards</span>
      </h1>
      <div className="flex flex-wrap justify-center py-1 my-1 gap-5 ">
            <div className="w-[18rem] flex flex-col gap-1 bg-white text-carRed text-center rounded hover:shadow-lg py-2">
                <img src={alto} className="rounded" alt="" />
                <h1 className="text-xl text-gray-800 font-semibold">Suzuki Alto</h1>
                <p className="text-sm font-extrabold text-muted">PKR 3000/day</p>
                
            </div>
            <div className="w-[18rem] bg-white text-carRed text-center rounded hover:shadow-lg">
                <img src={civic} className="rounded" alt="" />
                <h1 className="text-xl text-gray-800 font-semibold">Honda Civic</h1>
                <p className="text-sm font-extrabold text-muted">PKR 10,000/day</p>
            </div>
            <div className="w-[18rem] bg-white text-carRed text-center rounded hover:shadow-lg">
                <img src={swift} className="rounded" alt="" />
                <h1 className="text-xl text-gray-800 font-semibold">Suzuki Alto</h1>
                <p className="text-sm font-extrabold text-muted">PKR 6000/day</p>
            </div>
            <div className="w-[18rem] bg-white text-carRed text-center rounded hover:shadow-lg">
                <img src={landCruisor} className="rounded" alt="" />
                <h1 className="text-xl text-gray-800 font-semibold">Toyota Land cruiser</h1>
                <p className="text-sm font-extrabold text-muted">PKR 3000/day</p>
            </div>
            <div className="w-[18rem] bg-white text-carRed text-center rounded hover:shadow-lg">
                <img src={alto} className="rounded" alt="" />
                <h1 className="text-xl text-gray-800 font-semibold">Suzuki Alto</h1>
                <p className="text-sm font-extrabold text-muted">PKR 3000/day</p>
            </div>
           
      </div>
    </div>
  );
}

export default FeaturedCars;
