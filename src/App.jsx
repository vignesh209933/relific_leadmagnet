import React, { StrictMode } from "react";
import HeroSection from "./components/HeroSection";
import WhyMatters from "./components/WhyMatters";
import ClaritySection from "./components/ClaritySection";
import DownloadGuide from "./components/DownloadGuide";

const App = () => {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <WhyMatters />
      <ClaritySection />
      <DownloadGuide />
    </div>
  );
};

export default App;
