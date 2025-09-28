import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import "./components/style.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Solutions />
      <Contact />
    </div>
  );
}

export default App;