import React from "react";
import HeroSection from "./Component/Pages/HeroSection";
import About from "./Component/Pages/About";
import Navbar from "./Component/Navigation/Header";
import Services from "./Component/Pages/Services";
import Portfolio from "./Component/Pages/PortfolioItems";
import Footer from "./Component/Pages/Footer";
import ContactSection from "./Component/Pages/ContactSection";
import PaymentReminderPage from "./Component/Pages/PaymentReminderPage";

const App = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      {/* <Navbar /> */}
      <PaymentReminderPage />

      {/* Sections */}
      {/* <section id="home">
        <HeroSection />
      </section> */}

      {/* <section id="about">
        <About />
      </section> */}

   
      {/* <section id="services"><Services /></section>
      <section id="Portfolio"><Portfolio /></section>
      <section id="contact"><ContactSection /></section>
      <section id="footer"><Footer /></section> */}
     
    </div>
  );
};

export default App;
