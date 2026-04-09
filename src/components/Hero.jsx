import React, { useEffect } from "react";
import profileImg from "../assets/IMG_20250928_163404.png";
import { FaShoppingCart, FaHtml5, FaJs, FaPhp, FaSearch, FaServer, FaReact, FaNodeJs } from "react-icons/fa";
import { SiReact, SiNextdotjs } from "react-icons/si";



const Hero = () => {
  useEffect(() => {
    // Floating tags random positions
    const tags = document.querySelectorAll(".floating-tags span");
    tags.forEach(tag => {
      const x = Math.random() * window.innerWidth * 0.8;
      const y = Math.random() * window.innerHeight * 0.8;
      tag.style.left = `${x}px`;
      tag.style.top = `${y}px`;
    });
  }, []);

  return (
    <section className="hero">

      <div className="hero-content-wrapper">
        <div className="hero-right">
     <img src={profileImg} alt="Profile" />
        </div>

        <div className="hero-left">
          <h1 className="hero-title">
            Hello, I'm <span className="name">Sachin Jagtap</span>
          </h1>
          <p className="hero-desc">
            App & Web Developer focused on building modern applications and custom software solutions.
          </p>

  
 
<section className="hero-cards">
  <div className="cards-wrapper">
    <div className="card">
      <SiReact size={30} />
      <span className="card-text">React Native</span>
    </div>

    <div className="card">
      <SiNextdotjs size={30} />
      <span className="card-text">Next JS & React JS</span>
    </div>

    <div className="card">
      <FaPhp size={30} />
      <span className="card-text">PHP & MySQL</span>
    </div>

    <div className="card">
      <FaNodeJs size={30} />
      <span className="card-text">Node.js + Express</span>
    </div>

    <div className="card"  >
      <FaServer size={30} />
      <span className="card-text">Domain & Hosting Manage</span>
    </div>
    <div className="card cardmove "  >
      <FaShoppingCart size={30} />   
      <span className="card-text">E-Commerce Websites</span>
    </div>
  </div>
</section>


          <div className="hero-buttons">
         <a href="#contact">    <button   className="btn primary">Hire Now</button></a>
           <a href="/sachin.j.pdf" target="_blank" rel="noopener noreferrer">  <button className="btn secondary">Get Resume</button></a>
          </div>
        </div>
      </div>

      <div className="floating-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Portfolio</span>
        <span>UI/UX</span>
        <span>Web3</span>
      </div>
    </section>
  );
};

export default Hero;
