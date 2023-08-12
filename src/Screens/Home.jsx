import AOS from "aos";
import { useEffect } from "react";

import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Help from "../Components/Help";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Protection from "../Components/Protection";
import Security from "../Components/Security";
import Services from "../Components/Services";
import Testmonial from "../Components/Testmonial";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="overflow-y-hidden">
        <Hero />
        <Protection />
        <Help />
        <Security />
        <Testmonial />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
