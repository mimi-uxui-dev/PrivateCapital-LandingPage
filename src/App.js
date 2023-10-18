import React from "react";
import "./App.css";
import Header from "./assets/components/Header/Header";
import HeroSection from "./assets/components/HeroSection";
import DiscoverSection from "./assets/components/DiscoverSection";
import StatsSection from "./assets/components/StatsSection";
import ExpertiseSection from "./assets/components/ExpertiseSection";
import HowItWorksSection from "./assets/components/HowItWorksSection";
import ContactSection from "./assets/components/ContactSection";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <article className="frame">
      <div className="heroContent">
        <Header />
        <HeroSection />
      </div>

      <div className="div-3">
        <DiscoverSection />
        {/* <StatsSection />
        <ExpertiseSection />
        <HowItWorksSection />
        <ContactSection />
        <Footer /> */}
      </div>
    </article>
  );
}

export default App;
