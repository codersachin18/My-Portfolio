import React, { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.replaceWith(link.cloneNode(true));
      });
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    // delay 0.5s before showing dropdown
    hoverTimeout.current = setTimeout(() => setIsHovering(true), 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    // delay 0.5s before hiding dropdown
    hoverTimeout.current = setTimeout(() => setIsHovering(false), 500);
  };

  return (
    <header>
      <nav
        style={{
          
        }}
      >
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>

      <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#contact">
          <button className="btn1">Hire Me</button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
