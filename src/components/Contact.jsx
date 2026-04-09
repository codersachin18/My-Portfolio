import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
        <div className="contact-container">
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
