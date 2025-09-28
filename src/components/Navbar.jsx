import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });

    return () => {
      // Cleanup event listeners
      navLinks.forEach(link => {
        link.replaceWith(link.cloneNode(true));
      });
    };
  }, []);

  return (
    <header>
      <nav>
        <a href="#home" className="">Home</a>
        <a href="#skills">Skills</a>
        <a href="#Solutions">Solutions</a>
        <a href="#contact">Contact</a>
        <a href="#contact"> <button className="btn1">Hire Me</button></a>
          
        
      </nav>
    </header>
  );
};

export default Navbar;
