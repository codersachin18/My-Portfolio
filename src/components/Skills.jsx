 import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaWordpress, FaSearch, FaGoogle, FaServer, FaShoppingCart, FaElementor } from "react-icons/fa";

const skillsData = [
  { icon: <FaHtml5 size={40} color="#E34F26" />, title: "HTML" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, title: "CSS" },
  { icon: <FaJs size={40} color="#F7DF1E" />, title: "JavaScript" },
  { icon: <FaPhp size={40} color="#777BB4" />, title: "MySQL & PHP" },
  { icon: <FaWordpress size={40} color="#21759B" />, title: "Custom WP Websites" },
  { icon: <FaSearch size={40} color="#34A853" />, title: "SEO Optimization" },
  { icon: <FaGoogle size={40} color="#4285F4" />, title: "Google Analytics & Search Console" },
  { icon: <FaElementor size={40} color="#BA4287" />, title: "Elementor & Dynamic Functions" },
  { icon: <FaServer size={40} color="#F2994A" />, title: "Hosting & Domain Management" },
  { icon: <FaShoppingCart size={40} color="#FF6B6B" />, title: "E-Commerce Websites" }
];

const Skills = () => {
  useEffect(() => {
    // Canvas 3D background
    const canvas = document.getElementById("skills-bg");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Streak {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = 20 + Math.random() * 40;
        this.speed = 0.5 + Math.random() * 1;
        this.angle = Math.random() * Math.PI * 2;
        this.opacity = 0.1 + Math.random() * 0.5;
        this.width = 1 + Math.random() * 2;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x > canvas.width) this.x = 0;
        if (this.y > canvas.height) this.y = 0;
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

    const streaks = [];
    for (let i = 0; i < 50; i++) streaks.push(new Streak());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      streaks.forEach(s => { s.update(); s.draw(); });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="skills" className="skills-section  ">
        
      <canvas id="skills-bg"></canvas>
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
    </section>
  );
};

export default Skills;
