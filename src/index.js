import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import "./index.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Vehicles from "./Pages/Vehicles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from './Pages/ProductDetails';

// Creating Browser Router
const router = createBrowserRouter([
  { path: "/", element: <Home title="Home" /> },
  { path: "/vehicles", element: <Vehicles title="Vehicles" /> },
  { path: "/contact", element: <Contact title="Contact" /> },
  { path: "/about", element: <About title="About" /> },
  { path: "/login", element: <Login title="Login" /> },
  { path: "/signup", element: <Signup title="Signup" /> },
  { path: "/product-details", element: <ProductDetails /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
