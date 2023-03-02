import React from 'react'

function CheckoutForm() {
  return (
    <div className="text-gray-900 font-poppins relative py-3 bg-white">
    <div >
      <div className="">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-900"
              >
              Street Address
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='House number and street name'
                className="w-full bg-gray-100  bg-opacity-50 rounded border font-light border-gray-900 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-900"
              >
                House Address
              </label>
              <input
                type="text"
                placeholder='Apartment Suit Unit'
                className="w-full bg-gray-100   bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-900"
              >
               Town/City
              </label>
              <input
                placeholder='Lahore'
                className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-900"
              >
                Postcode / Zip
              </label>
              <input
                type="number"
                placeholder='8420'
                className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-900"
              >
               Province
              </label>
              <input
                type="text"
                placeholder='Punjab'
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-900"
              >
                Additional Information
              </label>
              <textarea
                type="number"
                placeholder='opposite Gulshan Garden'
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
         
        </div>
      </div>

    </div>
  </div>
  )
}

export default CheckoutForm