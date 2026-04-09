import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./WebSoftware.css";
import dashboard from "../assets/b-dashboard.png";
import wellEdu from "../assets/well-edu.png";

const WebSoftware = () => {
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

  const softwares = [
    {
      img: dashboard,
      title: "Branch Management Dashboard",
      desc: "A comprehensive custom-built SaaS dashboard for multi-branch management. Features include adding new branches, tracking monthly collections, profit/loss analysis, interactive charts, and complete analytics. The system provides real-time insights into branch performance, student enrollment tracking, payment management, and automated reporting. Built with a clean, intuitive interface for seamless branch operations and data-driven decision making.",
      tech: [
        { name: "PHP", icon: "fab fa-php" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "HTML/CSS", icon: "fab fa-html5" },
        { name: "WordPress", icon: "fab fa-wordpress" },
      ],
      note: "Live preview not available - Private SaaS product designed on-demand for client",
      link: null,
    },
    {
      img: wellEdu,
      title: "Profile Matching Platform",
      desc: "A trusted all-caste Vadhu–Var matchmaking platform serving all communities across Maharashtra. Features include verified profile listings, advanced search filters by community/caste/location, secure member authentication, affordable membership plans, profile verification system, and real-time updates. Built with manual profile screening, transparent matchmaking process, and community-focused approach for genuine, safe connections.",
      tech: [
        { name: "PHP", icon: "fab fa-php" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "HTML/CSS", icon: "fab fa-html5" },
        { name: "WordPress", icon: "fab fa-wordpress" },
      ],
      note: null,
      link: "https://welleducated.in/",
    },
  ];

  return (
    <section id="web-software" className="web-software-section">
      <canvas ref={canvasRef} className="bg-canvas"></canvas>
      <div className="overlay"></div>
      <div className="web-software-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Web-Based <span>Software</span>
          </h2>
          <p className="section-subtitle">
            Custom web-based systems built to meet specific project needs
          </p>
        </motion.div>

        <div className="software-grid">
          {softwares.map((software, index) => (
            <motion.div
              key={index}
              className="software-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="software-image">
                <img src={software.img} alt={software.title} />
              </div>

              <div className="software-content">
                <h3 className="software-title">{software.title}</h3>
                <p className="software-desc">{software.desc}</p>

                <div className="tech-stack">
                  <h4>Built Using:</h4>
                  <div className="tech-tags">
                    {software.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        <i className={tech.icon}></i>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {software.note && (
                  <div className="software-note">
                    <i className="fas fa-info-circle"></i>
                    <span>{software.note}</span>
                  </div>
                )}

                {software.link && (
                  <a
                    href={software.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="software-btn"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Visit Platform
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebSoftware;
