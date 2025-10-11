import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./ProjectShowcase.css";
import project1 from "../assets/1.jpg";
import project2 from "../assets/2.jpg";
import project3 from "../assets/3.png";
import project4 from "../assets/4.png";
import project5 from "../assets/5.jpg";
import project6 from "../assets/6.jpg";

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
    title: "Hudson Growth Agency",
    desc: "Hudson Growth Agency — a modern, responsive website showcasing business growth strategies, marketing plans, and creative solutions developed by Sachin.",
    link: "https://codersachin18.github.io/Hudson-Growth-Agency/",
  },
  {
    img: project2,
    title: "Neon byte Agency",
    desc: "A Neon byte Website is a platform designed to showcase servises of web development,seo,etc",
    link: "https://codersachin18.github.io/Neon-byte/",
  },
  {
    img: project3,
    title: "Nexora Studio",
    desc: "A modern agency website built for Nexora Studio to showcase services, portfolio, and company details with a clean and responsive design.",
    link: "https://codersachin18.github.io/Nexora-Studio/",
  },
  {
    img: project4,
    title: "Healthy Hub",
    desc: "A modern, responsive healthcare website built to showcase hospital services, doctors, and online appointment booking",
    link: "https://codersachin18.github.io/health-care-web/",
  },
  {
    img: project5,
    title: "Coin Invest",
    desc: "Coin Invest — a sleek and responsive investment website developed by Sachin, showcasing crypto insights, investment plans, and financial growth opportunities.",
    link: "https://codersachin18.github.io/Coin-Invest/",
  },
  {
    img: project6,
    title: "Bella Berry ",
    desc: "Bella Berry is a modern bakery website developed to showcasing elegant design, smooth functionality, and a delightful dessert experience online.",
    link: "https://codersachin18.github.io/Bella-Berry/",
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
