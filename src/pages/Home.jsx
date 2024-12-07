import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../components/Bannner";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import Doctors from "../components/Doctors";
import Suggestion from './Suggestions'
import Footer from "./Footer";
const Home = () => {
  return (
    <>

      <Navbar />
     
        <Banner />
        <OurServices />
        <AboutUs />
        <Doctors />
        <Suggestion/>
       
    
      <Footer/>
    </>
  );
};

export default Home;
