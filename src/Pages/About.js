import React from 'react'
import AboutHero from '../Components/About/AboutHero';
import Layout from '../Components/Layout/Layout';

function About(props) {
  // Changing Title 
    document.title = props.title + " - Carkhana"
  return (
    <>
       <Layout>
        <AboutHero/>
       </Layout>
    </>
  )
}

export default About