import React, { useEffect } from "react";
import profileImg from "../assets/IMG_20250928_163404.png";
import { FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase, FaSearch, FaServer } from "react-icons/fa";



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

    // Multi-layer dynamic streaks background
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Streak {
      constructor(layer) {
        this.layer = layer;
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = (30 + Math.random() * 50) * this.layer.speedFactor;
        this.speed = (0.5 + Math.random() * 1.5) * this.layer.speedFactor;
        this.angle = Math.random() * Math.PI / 4 - Math.PI / 8;
        this.opacity = 0.1 + Math.random() * 0.4 * this.layer.opacityFactor;
        this.width = 1 + this.layer.widthFactor;
      }
      update() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        if (this.x > canvas.width || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.strokeStyle = `rgba(56,189,248,${this.opacity})`;
        ctx.lineWidth = this.width;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length * Math.cos(this.angle), this.y - this.length * Math.sin(this.angle));
        ctx.stroke();
      }
    }

    const layers = [
      { count: 8, speedFactor: 1, opacityFactor: 1, widthFactor: 0 },
      { count: 5, speedFactor: 0.6, opacityFactor: 0.5, widthFactor: 1 },
      { count: 3, speedFactor: 1.5, opacityFactor: 0.8, widthFactor: 2 }
    ];

    let streaks = [];
    layers.forEach(layer => {
      for (let i = 0; i < layer.count; i++) streaks.push(new Streak(layer));
    });

    function animateBG() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      streaks.forEach(s => { s.update(); s.draw(); });
      requestAnimationFrame(animateBG);
    }

    animateBG();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="hero">
      <canvas id="bg-canvas"></canvas>

      <div className="hero-content-wrapper">
        <div className="hero-right">
     <img src={profileImg} alt="Profile" />
        </div>

        <div className="hero-left">
          <h1 className="hero-title">
            Hello, I'm <span className="name">Sachin Jagtap</span>
          </h1>
          <p className="hero-desc">
            I create stunning websites and interactive web experiences that
            captivate users and elevate brands.
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
         <a href="#contact">    <button   className="btn primary">Hire Now</button></a>
           <a href="/resume.pdf">  <button className="btn secondary">Get Resume</button></a>
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
