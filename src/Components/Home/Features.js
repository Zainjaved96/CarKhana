import React from "react";
import features from "../../images/features.png"

function Features() {
  return (
    // feature image designed by Canva
    <section className=" bg-gray-900   py-4 font-poppins row  container-fluid text-center m-0 pt-  text-white">
      <h1 className="text-3xl mb-4 text-white font-semibold">
        <span className=" pb-1">We are Ensuring <br/> <span className="border-b-2 border-darkRed" > Best Customer Experience</span></span>
      </h1>
    <div className="flex justify-center">
    <img src={features} className="lg:w-[80%]" alt="" />
     </div>   
    </section>
  );
}

export default Features;
