import React from "react";
import {
  FaCode, FaShoppingCart, FaSearch, FaServer,
  FaGoogle, FaWordpress, FaPencilRuler, FaLaptopCode,
} from "react-icons/fa";
import SplitText from "./SplitText";
import BlurText from "./BlurText";

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
  return (
    <section id="Solutions" className="solutions-section">
      <div className="solutions-heading">
        <SplitText
          text="My Solutions"
          tag="h2"
          className="typing-heading"
          delay={60}
          duration={1.2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />
        <BlurText
          text="I help businesses and individuals build modern websites, custom web tools, and digital strategies that drive real growth."
          delay={80}
          animateBy="words"
          direction="top"
          className="sub-heading"
        />
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
