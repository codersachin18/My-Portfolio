import React, { useEffect } from "react";
import {
  FaCode,
  FaShoppingCart,
  FaSearch,
  FaServer,
  FaGoogle,
  FaWordpress,
  FaPencilRuler,
  FaLaptopCode,
} from "react-icons/fa";

const solutionsData = [
  {
    icon: <FaCode size={40} color="#2f80ed" />,
    title: "Web Development",
    desc: "Building modern, responsive websites with seamless user experiences."
  },
  {
    icon: <FaShoppingCart size={40} color="#FF6B6B" />,
    title: "E-Commerce Store Development",
    desc: "Custom online store solutions designed to maximize sales and usability."
  },
  {
    icon: <FaSearch size={40} color="#34A853" />,
    title: "SEO & Google Analytics",
    desc: "Optimize visibility and track performance to grow your online presence."
  },
  {
    icon: <FaServer size={40} color="#F2994A" />,
    title: "Hosting & Domain Management",
    desc: "Reliable hosting and smooth domain management for your website."
  },
  {
    icon: <FaGoogle size={40} color="#4285F4" />,
    title: "Google Search Console",
    desc: "Monitor, maintain, and troubleshoot your site’s search visibility."
  },
  {
    icon: <FaWordpress size={40} color="#21759B" />,
    title: "Custom Web Development",
    desc: "Tailored website solutions crafted to meet your unique requirements."
  },
  {
    icon: <FaLaptopCode size={40} color="#9B51E0" />,
    title: "Custom Web-Based Software",
    desc: "Developing scalable, secure web-based applications for businesses."
  },
  {
    icon: <FaPencilRuler size={40} color="#E34F26" />,
    title: "Website Redesign",
    desc: "Refreshing outdated websites with modern UI/UX and better performance."
  },
];





const Solutions = () => {
  useEffect(() => {
    // Canvas Background Animation (different design: particles)
    const canvas = document.getElementById("solutions-bg");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.dx = (Math.random() - 0.5) * 1.5;
        this.dy = (Math.random() - 0.5) * 1.5;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "rgba(86,204,242,0.7)";
        ctx.fill();
      }
      update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0 || this.x > canvas.width) this.dx = -this.dx;
        if (this.y < 0 || this.y > canvas.height) this.dy = -this.dy;
        this.draw();
      }
    }

    const particles = [];
    for (let i = 0; i < 60; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => p.update());
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  return (
    <section id="Solutions" className="solutions-section">
      <canvas id="solutions-bg"></canvas>
      <div className="solutions-heading">
  <h2 className="typing-heading">My Solutions</h2>
  <p className="sub-heading">
    I help businesses and individuals build modern websites, custom web tools, and
    digital strategies that drive real growth.
  </p>
</div>


     

      <div className="solutions-wrapper">
        {solutionsData.map((solution, index) => (
          <div className="solution-card" key={index}>
            {solution.icon}
            <h3>{solution.title}</h3>
            <p>{solution.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
