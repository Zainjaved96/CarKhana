import React from 'react'
import AboutHero from '../Components/AboutHero';
import Layout from '../Components/Layout';

function About(props) {
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