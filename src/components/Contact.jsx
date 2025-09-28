import React, { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = "rgba(8, 27, 34, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    for (let i = 0; i < 50; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <>
    <section id="contact" className="contact-section">
      <canvas ref={canvasRef}></canvas>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to me. I’d love to discuss your project!</p>
          <p><strong>Email:</strong> sachinraj18sj@gmail.com</p>
          <div className="social-links">
            <a href="https://github.com/codersachin18" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="www.linkedin.com/in/sachin-jagtap-67a8b9333" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://wa.me/917387574762" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/mariner_sachin_18k_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
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
