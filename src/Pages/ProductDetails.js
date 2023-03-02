import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Components/Layout";
import { useState  } from "react";
import { Link } from "react-router-dom";

function ProductDetails() {

  //  Getting data from previous page 
  const location = useLocation();
  const car = location.state;
  
  // Turning features into a list 
  const features = car.features.map((feature)=>{
    return <li className="text-gray-400">
    <span className="text-gray-600">
      {feature}
    </span>
    </li>
    })
  
  // Adding UseState for price change 
  const [price, setPrice] = useState(car.rentalPrice)
  function setDays(e){
    
    setPrice(car.rentalPrice * e.target.value )
  }
  return (
    <Layout>
    
      <div className="bg-white font-pop">
        <div className="pt-6">
         
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <img src={require(`../images/${car.imageName}`)} alt="car-img" />
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {car.name}
              </h1>
            </div>
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Vehicle information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${price}/day</p>
              <form className="my-2 flex flex-col">
                  <lable>For how many number of days.</lable>
                  <input type="number" defaultValue="1" pattern="^[1-9]|[12]\d|30$" min="1" max="30" onChange={setDays} className="py-2 px-2 border border-gray-900 " placeholder="How many days ?"/>
              </form>
              {/* Reviews */}
            
              <div className="mt-10">
                {/* Colors */} 
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Color</legend>
                    <div className="flex items-center space-x-3">
                      <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                        <input
                          type="radio"
                          name="color-choice"
                          defaultValue="White"
                          className="sr-only"
                          aria-labelledby="color-choice-0-label"
                        />
                        <span id="color-choice-1-label" className="sr-only">
                        
                          White
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"
                        />
                      </label>
                    </div>
                  </fieldset>
                </div>
                {/*izes */}
                
                <Link to="/checkout"
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 hover:bg-gray-900 py-3 px-8 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                 Rent Now
                </Link>
              </div>
            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {car.desc}
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-medium text-gray-900">
                 Features
                </h3>
                <div className="mt-4">
                  <div role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {/* Adding Features */}
                  {features}
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    The 6-Pack includes two black, two white, and two heather
                    gray Basic Tees. Sign up for our subscription service and be
                    the first to get new, exciting colors, like our upcoming
                    "Charcoal Gray" limited release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  );
}

export default ProductDetails;
