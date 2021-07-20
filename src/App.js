import React from "react"
import './App.css';
import NavBar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import GetInTouchSection from "./components/GetInTouchSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div>
    <NavBar />
    <FeatureSection/>
    <HeroSection/>
    <GetInTouchSection/>
    <FooterSection/>
    </div>
  );
}

export default App;
