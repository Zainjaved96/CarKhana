import React from 'react'
import data from "../../Data/Cars.json"
import Filtering from './Filtering'
import SearchCards from './SearchCards'



function VehicleSearch() {
    const cars = data.cars
    const carCards = cars.map((x)=>{
        return <SearchCards car={x} />
    })
    console.log(carCards)
  return (
    // Car Search aligned with Flexbox
    <div className='font-poppins  bg-[#F8F5F4]'>
        {/* Making flex a column on mobile devices */}
        <div className="flex flex-wrap gap-5 flex-col sm:flex-row px-5 sm:px-20 py-10">
            {/* Flex-none so filter section is small */}
           <Filtering/>
            {/* Using grow so car section is bigger */}
            <div className='grow  py-2 '>
                <h1 className="text-2xl text-center font-semibold">Explore Vehicles</h1>
                <div className='flex flex-col '>
                    {carCards}
                </div>
            </div>

        </div>
    </div>
  )
}

export default VehicleSearch