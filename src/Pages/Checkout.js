import React from 'react'
import Layout from './../Components/Layout/Layout';
import CheckoutForm from './../Components/Checkout/CheckoutForm';
import Invoice from './../Components/Checkout/Invoice';

function Checkout() {
  return (
   <Layout>
        <div className="bg-white font-poppins">
            <h1 className='text-2xl text-center py-4'>Checkout</h1>
            <div className='flex flex-col lg:flex-row lg:px-20'>
                <div className='w-full  px-4'>
                    <h1 className='text-xl font-medium text-start py-2 '>Billing Information</h1>
                    {/* Adding Checkout Form from component */}
                    <CheckoutForm/>
                </div>
                <div className='w-full  px-4'>
                 <h1 className='text-xl font-medium text-center py-2 '>Your Order</h1>
                 <Invoice/>
                 <div className='mt-3 text-center'>
                    <button className='bg-gray-800 hover:bg-gray-900  px-3 py-2 text-white text-xl  w-full rounded'>Order Now</button>
                 </div>
            </div>
            </div>
           
           

        </div>
   </Layout>
  )
}

export default Checkout