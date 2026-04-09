import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import MyApps from "./components/MyApps";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import ProjectShowcase from "./components/ProjectShowcase";
import WebSoftware from "./components/WebSoftware";
import SmokeyCursor from "./components/lightswind/smokey-cursor";
import Particles from "./components/Particles";

import "./components/style.css";
function App() {
  return (
    <div style={{ position: "relative", background: "#000" }}>
      <div style={{ position: "fixed", inset: 0, zIndex: 0, width: "100%", height: "100%" }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Skills />
        <MyApps />
        <WebSoftware />
        <ProjectShowcase />
        <Solutions />
        <Contact />
        <SmokeyCursor />
      </div>
    </div>
  );
}

export default App;