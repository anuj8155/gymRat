import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Pricing from "./Components/Pricing";
import Workoutsession from "./Components/Workoutsession";
import BMIcalculator from "./Components/BMIcalculator";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  

const locomotiveScroll = new LocomotiveScroll();

  return (
    <Router>
      <Navbar />
      <Hero />
      <Workoutsession />
      <Gallery />
      <Pricing />
      <Contact />
      <BMIcalculator />
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App
