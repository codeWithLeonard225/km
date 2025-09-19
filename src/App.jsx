import React from "react";
import HeroSection from "./Component/Pages/HeroSection";
import About from "./Component/Pages/About";
import Navbar from "./Component/Navigation/Header";
import Services from "./Component/Pages/Services";

const App = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

   
      <section id="services"><Services /></section>
      {/* <section id="contact"><Contact /></section> */}
     
    </div>
  );
};

export default App;
