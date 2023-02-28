import React from 'react'
import { useLocation } from 'react-router-dom'
import Layout from '../Components/Layout'
function ProductDetails() {
    const location = useLocation() 
    const car = location.state
  return (
    <Layout>
        <div>ProductDetails {car.name}</div>
    </Layout>
    
  )
}

export default ProductDetails