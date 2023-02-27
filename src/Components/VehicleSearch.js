import React from 'react'
import swift from "../images/Product-Card.png"
import city from "../images/city.png"
import corolla from "../images/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg"
function VehicleSearch() {
  return (
    <div className='font-poppins  bg-[#F8F5F4]'>
        <div className="flex flex-wrap gap-5 flex-col sm:flex-row px-5 sm:px-20 my-10">
            <div className='flex-none  md:w-[18rem]  py-2 ' >
                <h1 className='text-lg font-semibold my-4
                '>Filter By</h1>
                <div className="my-3 bg-white px-4 py-2 rounded shadow-md">
                    <h1 className='text-lg  font-semibold '>Price Range</h1>
                    <div className='flex flex-col gap-1 justify-start my-2'>
                       <div className="flex gap-1">
                            <input type="price" placeholder='Starting' className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-2 leading-8 transition-colors duration-200 ease-in-out' />
                            <p className='text-lg'>PKR</p>
                       </div>
                       <p className="font-semibold">To</p>
                       <div className="flex gap-1">
                            <input type="price" placeholder='Ending' className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-2 leading-8 transition-colors duration-200 ease-in-out' />
                            <p className='text-lg'>PKR</p>
                       </div>
                       
                    </div>
                   
                </div>
                <div className="my-3 bg-white px-4 py-2 rounded shadow-md">
                    <h1 className='text-lg  font-semibold '>Brands</h1>
                    <div className='flex flex-col gap-1 justify-start my-2'>
                       <div className="flex gap-1">
                            <input type="checkbox" className='w-5' name="" id="" />
                            <p className='text-lg'>Suzuki</p>
                       </div>
                       <div className="flex gap-1">
                            <input type="checkbox" className='w-5' name="" id="" />
                            <p className='text-lg'>Mercedes</p>
                       </div>
                       <div className="flex gap-1">
                            <input type="checkbox" className='w-5' name="" id="" />
                            <p className='text-lg'>Mercedes</p>
                       </div>
                       <div className="flex gap-1">
                            <input type="checkbox" className='w-5' name="" id="" />
                            <p className='text-lg'>BMW</p>
                       </div>
                       <div className="flex gap-1">
                            <input type="checkbox" className='w-5' name="" id="" />
                            <p className='text-lg'>Honda</p>
                       </div>
                    </div>
                   
                </div>
                <div className="my-3 bg-white px-4 py-2 rounded shadow-md">
                    <h1 className='text-lg  font-semibold '>Passengers</h1>
                    <div className='flex flex-col gap-1 justify-start my-2'>
                       <div className="flex gap-1">
                            <input type="checkbox" className='w-5' name="" id="" />
                            <p className='text-lg'>5</p>
                       </div>
                       <div className="flex gap-1">
                            <input type="checkbox" className='w-5' name="" id="" />
                            <p className='text-lg'>5+</p>
                       </div>
                       <div className="flex gap-1">
                            <input type="checkbox" className='w-5' name="" id="" />
                            <p className='text-lg'>25+</p>
                       </div>
                    </div>
                   
                </div>
            </div>
            <div className='grow  py-2 '>
                <h1 className="text-2xl text-center font-semibold">Explore Vehicles</h1>
                <div className='flex flex-col '>
                    <div className="flex-col my-2 sm:flex-row flex  sm:items-center py-2 bg-white px-2 rounded shadow-sm">
                    <div className='flex justify-center'>
                            <img src={swift} className="w-[164px] h[129px] " alt="" />
                        </div>                        <div className="flex  flex-col  sm:px-5">
                            <h1 className='text-xl font-semibold'>Suzuki Swift</h1>
                            <p className='text-base text-muted'>2018</p>
                            <div className="flex gap-2 py-2 flex-col sm:flex-row">
                                <div className="flex ">
                                    <p className='text-muted text-sm'>Passengers:</p>
                                    <p className='text-sm'>5</p>
                                </div>
                                <div className="flex items-center">
                                    <p className='text-sm text-muted '>Gear:</p>
                                    <p className='text-sm'>Manual</p>
                                </div>
                                <div className="flex items-center">
                                    <p className='text-sm text-muted '>Feul:</p>
                                    <p className='text-sm'>Full</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:ml-auto sm:mr-3">
                            <h1 className='text-xl font-semibold'>4,999 Rs</h1>
                            <p className='text-base text-muted'>Per day</p>
                            <a className='py-2 px-2 mt-2 bg-carRed rounded text-white hover:bg-darkRed cursor-pointer'>Rent Now</a>
                        </div>
                    </div>
                    <div className="flex-col my-2 sm:flex-row flex  sm:items-center py-2 bg-white px-2 rounded shadow-sm">
                        <div className='flex justify-center'>
                            <img src={corolla} className="w-[164px] h[129px] " alt="" />
                        </div>
                        <div className="flex  flex-col  sm:px-5">
                            <h1 className='text-xl font-semibold'>Toyota Corolla</h1>
                            <p className='text-base text-muted'>2021</p>
                            <div className="flex gap-2 py-2 flex-col sm:flex-row">
                                <div className="flex ">
                                    <p className='text-muted text-sm'>Passengers:</p>
                                    <p className='text-sm'>5</p>
                                </div>
                                <div className="flex items-center">
                                    <p className='text-sm text-muted '>Gear:</p>
                                    <p className='text-sm'>Manual</p>
                                </div>
                                <div className="flex items-center">
                                    <p className='text-sm text-muted '>Feul:</p>
                                    <p className='text-sm'>Full</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:ml-auto sm:mr-3">
                            <h1 className='text-xl font-semibold'>14,999 Rs</h1>
                            <p className='text-base text-muted'>Per day</p>
                            <a className='py-2 px-2 mt-2 bg-carRed rounded text-white hover:bg-darkRed cursor-pointer'>Rent Now</a>
                        </div>
                    </div>
                    <div className="flex-col my-2 sm:flex-row flex  sm:items-center py-2 bg-white px-2 rounded shadow-sm">
                    <div className='flex justify-center'>
                            <img src={city} className="w-[164px] h[129px] " alt="" />
                        </div>                        <div className="flex  flex-col  sm:px-5">
                            <h1 className='text-xl font-semibold'>Honda City</h1>
                            <p className='text-base text-muted'>2020</p>
                            <div className="flex gap-2 py-2 flex-col sm:flex-row">
                                <div className="flex ">
                                    <p className='text-muted text-sm'>Passengers:</p>
                                    <p className='text-sm'>5</p>
                                </div>
                                <div className="flex items-center">
                                    <p className='text-sm text-muted '>Gear:</p>
                                    <p className='text-sm'>Manual</p>
                                </div>
                                <div className="flex items-center">
                                    <p className='text-sm text-muted '>Feul:</p>
                                    <p className='text-sm'>Full</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:ml-auto sm:mr-3">
                            <h1 className='text-xl font-semibold'>12,999 Rs</h1>
                            <p className='text-base text-muted'>Per day</p>
                            <a className='py-2 px-2 mt-2 bg-carRed rounded text-white hover:bg-darkRed cursor-pointer'>Rent Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default VehicleSearch