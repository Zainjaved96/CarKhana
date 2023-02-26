import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Brand from "./Components/Brands"
import FeaturedCars from './Components/FeaturedCars';
import Features from './Components/Features';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar logoName="CarKhana" />
      <Hero/>
      <Brand/>
      <FeaturedCars/>
      <Features/>
      <Footer/>
    </>

  );
}

export default App;
