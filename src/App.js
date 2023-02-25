import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Brand from "./Components/Brands"
import FeaturedCars from './Components/FeaturedCars';


function App() {
  return (
    <>
      <Navbar logoName="CarKhana" />
      <Hero/>
      <Brand/>
      <FeaturedCars/>
    </>

  );
}

export default App;
