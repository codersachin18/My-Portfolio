import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const whatsappMessage = `Hello! I'm ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
      window.open(`https://wa.me/917387574762?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        <div className="contact-container" style={{ position: "relative", zIndex: 2 }}>
          <div className="contact-left">
            <h2>Get in Touch</h2>
            <p>Feel free to reach out to me. I'd love to discuss your project!</p>
            <p><strong>Email:</strong> sachinraj18sj@gmail.com</p>
            <div className="social-links">
              <a href="https://github.com/codersachin18" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/sachin-jagtap-67a8b9333/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://wa.me/917387574762" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/mariner_sachin_18k_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleInputChange} required></textarea>
              <button type="submit">Send via WhatsApp</button>
            </form>
          </div>
        </div>
      </section>
      <div className="footer">
        <p>© {new Date().getFullYear()} Developed by Sachin Jagtap</p>
      </div>
    </>
  );
};

export default Contact;
