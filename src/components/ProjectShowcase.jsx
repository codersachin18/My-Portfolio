import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./ProjectShowcase.css";
import project1 from "../assets/1.png";
import project2 from "../assets/2.png";
import project3 from "../assets/3.png";
import project4 from "../assets/4.png";
import project5 from "../assets/5.png";
import project6 from "../assets/6.png";

const ProjectShowcase = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h, particles;
    const particleCount = 50;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 3 + 1,
          dx: (Math.random() - 0.5) * 0.8,
          dy: (Math.random() - 0.5) * 0.8,
        });
      }
    };
    createParticles();

    const animate = () => {
      ctx.fillStyle = "rgba(10, 15, 40, 0.35)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#3b82f6";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

 const projects = [
  {
    img: project1,
    title: "Nuri Pure",
    desc: "Multi-vertical clean energy brand offering Solar Panels, EV Charging Stations, and Electric Scooters supporting India's transition to sustainable mobility.",
    link: "https://nuripure.in/",
  },
  {
    img: project2,
    title: "NRS Multi Bizz",
    desc: "World-class solar solutions provider delivering premium panels, expert installation, and complete solar support across India.",
    link: "https://nrsmultibizz.com/",
  },
  {
    img: project3,
    title: "Mixo Smart",
    desc: "Specializes in designing and manufacturing high-performance industrial equipment for chemical, pharmaceutical, and specialty manufacturing units.",
    link: "https://mixosmart.com/",
  },
  {
    img: project4,
    title: "Genius Brain DMIT",
    desc: "ISO 9001:2015 certified institute offering Dermatoglyphics Multiple Intelligence Test services for students, professionals, and parents.",
    link: "https://dmitestfranchise.com/",
  },
  {
    img: project5,
    title: "Almaden Estates",
    desc: "Leading real estate developer with over 20 years experience acquiring land and building high-quality homes across the United States.",
    link: "https://almadenestates.com/",
  },
  {
    img: project6,
    title: "Perfect Sunwin Solar",
    desc: "Committed to sustainable energy with professional solar panel installation, tailored system design, and long-term maintenance support.",
    link: "https://perfectsunwinsolar.com/",
  },
];


  return (
    <section id="projects" className="project-section">
      <canvas ref={canvasRef} className="bg-canvas"></canvas>
      <div className="overlay"></div>

      <div className="content">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span>Projects</span>
        </motion.h2>

        <div className="project-grid">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              className="project-card"
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={p.img} alt={p.title} className="project-img" />
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a
                  href={p.link}
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
