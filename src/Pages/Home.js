import React from "react";
import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import FeaturedCars from "../Components/FeaturedCars";
import Features from "../Components/Features";
import Layout from "../Components/Layout";

function Home(props) {
  document.title = props.title + " - Carkhana";
  return (
    <>
      <Layout>
        <Hero />
        <Brands />
        <FeaturedCars />
        <Features />
      </Layout>
    </>
  );
}

export default Home;
