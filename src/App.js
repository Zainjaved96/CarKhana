import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Brand from "./Components/Brands"
import FeaturedCars from './Components/FeaturedCars';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Auth from './Pages/Auth';
import Forms from './Components/Forms';
import Signup from './Components/Signup';


function App() {
  return (
    <>
      {/* <Navbar logoName="CarKhana" />
      <Hero/>
      <Brand/>
      <FeaturedCars/>
      <Features/>
      <Footer/> */}
      <Navbar/>
      <Signup/>
      <Footer/>
    </>

  );
}

export default App;
