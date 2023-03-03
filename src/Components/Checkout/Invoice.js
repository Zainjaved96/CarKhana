import React from 'react'

function Invoice() {
  return (
    // Creating Card
        <div className='bg-gray-100 p-4 text-center rounded shadow w-[20rem]'>
            <div className="flex justify-around">
                <p className='text-base w-full font-semibold'>Vehicle</p>
                <p className='text-base w-full font-semibold'>Total</p>
            </div>
            <div className="flex justify-around pt-2">
                <p className='text-base w-full '>Suzuki Swift 2018</p>
                <p className='text-base w-full '>24$</p>
            </div>
            <div className="flex justify-around pt-2">
                <p className='text-base w-full '>No of Days</p>
                <p className='text-base w-full '>3</p>
            </div>
            <div className="flex justify-around pt-2">
                <p className='text-base w-full '>Platform Fees 5%</p>
                <p className='text-base w-full '>3$</p>
            </div>
            <hr className='mt-2 mb-2' />
            <div className="flex justify-around py-2 ">
                <p className='text-base w-full '>Shipping</p>
                <p className='text-base w-full '>1$</p>
            </div>
            <hr className='mt-2 mb-2' />
            <div className="flex justify-around py-2 ">
                <p className='text-lg font-semibold w-full '>Total</p>
                <p className='text-lg font-semibold w-full '>34$</p>
            </div>

        </div>
        
  )
}

export default Invoice