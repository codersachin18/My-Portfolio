import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./ProjectShowcase.css";
import project1 from "../assets/1.png";
import project3 from "../assets/3.png";
import wellEdu from "../assets/well-edu.png";
import travel from "../assets/travel.png";
import sanjivani from "../assets/sanjivani.png";
import saras from "../assets/saras.png";

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
    { img: sanjivani, title: "Sanjivani Carecrafts", desc: "Built with product listing & enquiry features. Sanjivani Carecrafts Pvt. Ltd. delivers high-quality hospital furniture and medical equipment, empowering healthcare providers with durable, reliable, and thoughtfully engineered solutions.", link: "https://sanjivanicarecrafts.com/" },
    { img: wellEdu, title: "Well Educated Matrimony", desc: "Trusted Vadhu–Var matchmaking platform for all communities across Maharashtra. Built to help families find genuine, compatible matches with a secure and professional experience.", link: "https://welleducated.in/" },
    { img: project1, title: "Nuri Pure", desc: "Multi-vertical clean energy brand offering Solar Panels, EV Charging Stations, and Electric Scooters supporting India's transition to sustainable mobility.", link: "https://nuripure.in/" },
    { img: travel, title: "Travel Trip Pune", desc: "Your trusted travel partner offering international & domestic tour packages with the best deals. Explore dream destinations across India and the world with expert-planned itineraries.", link: "https://mytraveltrippune.com/" },
    { img: project3, title: "Mixo Smart", desc: "Specializes in designing and manufacturing high-performance industrial equipment for chemical, pharmaceutical, and specialty manufacturing units.", link: "https://mixosmart.com/" },
    { img: saras, title: "Saraswati Infra", desc: "Turning complex engineering challenges into future-ready infrastructure. Experts in excavation, civil construction, canal & dam projects, real estate, and infrastructure development — built on reliability and precision.", link: "https://sarswatiinfra.com/" },
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
              <div className="project-img-wrapper">
                <img src={p.img} alt={p.title} className="project-img" />
              </div>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link} className="project-btn" target="_blank" rel="noopener noreferrer">
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
