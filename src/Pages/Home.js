import React from "react";
import Hero from "../Components/Home/Hero";
import Brands from "../Components/Home/Brands";
import FeaturedCars from "../Components/Home/FeaturedCars";
import Features from "../Components/Home/Features";
import Layout from "../Components/Layout/Layout";

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
