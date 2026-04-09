import React, { useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaWordpress, FaSearch, FaServer, FaShoppingCart } from "react-icons/fa";
import { SiMysql, SiGoogleanalytics, SiElementor } from "react-icons/si";

const skillsData = [
  { icon: <FaWordpress size={40} color="#21759B" />, title: "WordPress" },
  { icon: <FaHtml5 size={40} color="#E34F26" />, title: "HTML" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, title: "CSS" },
  { icon: <FaJs size={40} color="#F7DF1E" />, title: "JavaScript" },
  { icon: <FaPhp size={40} color="#777BB4" />, title: "MySQL & PHP" },
  { icon: <FaSearch size={40} color="#34A853" />, title: "SEO Optimization" },
  { icon: <SiGoogleanalytics size={40} color="#E37400" />, title: "Google Analytics & Search Console" },
  { icon: <SiElementor size={40} color="#92003B" />, title: "Elementor & Dynamic Functions" },
  { icon: <FaServer size={40} color="#F2994A" />, title: "Hosting & Domain Management" },
  { icon: <FaShoppingCart size={40} color="#96588A" />, title: "E-Commerce Websites" },
];

const Skills = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h, particles;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
    }));

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

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="solutions-heading">
          <h2 className="typing-heading">My Skills</h2>
        </div>
        <div className="skills-wrapper">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill.icon}
              <span className="skill-title">{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
