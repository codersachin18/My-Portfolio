import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import ProjectShowcase from "./components/ProjectShowcase";
import SmokeyCursor from "./components/lightswind/smokey-cursor";

import "./components/style.css";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Solutions />
      <ProjectShowcase />
      <Contact />
      <SmokeyCursor />
    </div>
  );
}

export default App;