import React from 'react'

function Filtering() {
  return (
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
  )
}

export default Filtering