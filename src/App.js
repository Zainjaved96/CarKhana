import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singup from './Pages/Singup';
import Vehicles from './Pages/Vehicles';
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/vehicles" element=<Vehicles /> />
        <Route path="/contact" element=<Contact/> />
        <Route path="/about" element=<About/> />
        <Route path="/login" element=<Login/> />
        <Route path="/signup" element=<Singup/> />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
