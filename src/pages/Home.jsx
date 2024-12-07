import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../components/Bannner";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import Doctors from "../components/Doctors";
import Suggestion from './Suggestions'
const Home = () => {
  return (
    <>

      <Navbar />
      <section className="align-element">
        <Banner />
        <OurServices />
        <AboutUs />
        <Doctors />
        <Suggestion/>
      </section>
    </>
  );
};

export default Home;
