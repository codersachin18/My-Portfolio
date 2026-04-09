import React, { useEffect } from "react";
import profileImg from "../assets/IMG_20250928_163404.png";
import { FaWordpress, FaHtml5, FaJs, FaPhp, FaSearch, FaServer } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
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
            I create stunning websites and interactive web experiences that captivate users and elevate brands.
          </p>

          <section className="hero-cards">
            <div className="cards-wrapper">
              <div className="card">
                <FaWordpress size={30} />
                <span className="card-text">WordPress</span>
              </div>
              <div className="card">
                <FaHtml5 size={30} />
                <span className="card-text">HTML, CSS, JavaScript</span>
              </div>
              <div className="card">
                <FaPhp size={30} />
                <span className="card-text">PHP & MySQL</span>
              </div>
              <div className="card">
                <FaSearch size={30} />
                <span className="card-text">SEO & Google Analytics</span>
              </div>
              <div className="card">
                <FaServer size={30} />
                <span className="card-text">Domain & Hosting Manage</span>
              </div>
            </div>
          </section>

          <div className="hero-buttons">
            <a href="#contact"><button className="btn primary">Hire Now</button></a>
            <a href="/sachin jagtap.wp.pdf" target="_blank" rel="noopener noreferrer"><button className="btn secondary">Get Resume</button></a>
          </div>
        </div>
      </div>

      <div className="floating-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>WordPress</span>
        <span>PHP</span>
        <span>SEO</span>
        <span>UI/UX</span>
        <span>Web Dev</span>
      </div>
    </section>
  );
};

export default Hero;
