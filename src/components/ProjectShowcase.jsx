import React from "react";
import "./ProjectShowcase.css";
import ChromaGrid from "./ChromaGrid";
import SplitText from "./SplitText";
import BlurText from "./BlurText";

import wellEdu from "../assets/well-edu.png";
import travel from "../assets/travel.png";
import sanjivani from "../assets/sanjivani.png";
import saras from "../assets/saras.png";
import project1 from "../assets/1.png";
import project3 from "../assets/3.png";

const ProjectShowcase = () => {
  const projects = [
    {
      image: sanjivani,
      title: "Sanjivani Carecrafts",
      subtitle: "Hospital furniture & medical equipment platform with product listing & enquiry features.",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://sanjivanicarecrafts.com/",
    },
    {
      image: wellEdu,
      title: "Well Educated Matrimony",
      subtitle: "Trusted Vadhu–Var matchmaking platform for all communities across Maharashtra.",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #10B981, #000)",
      url: "https://welleducated.in/",
    },
    {
      image: project1,
      title: "Nuri Pure",
      subtitle: "Multi-vertical clean energy brand — Solar Panels, EV Charging & Electric Scooters.",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(145deg, #F59E0B, #000)",
      url: "https://nuripure.in/",
    },
    {
      image: travel,
      title: "Travel Trip Pune",
      subtitle: "Trusted travel partner offering international & domestic tour packages.",
      borderColor: "#EC4899",
      gradient: "linear-gradient(145deg, #EC4899, #000)",
      url: "https://mytraveltrippune.com/",
    },
    {
      image: project3,
      title: "Mixo Smart",
      subtitle: "High-performance industrial equipment for chemical & pharmaceutical manufacturing.",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(145deg, #8B5CF6, #000)",
      url: "https://mixosmart.com/",
    },
    {
      image: saras,
      title: "Saraswati Infra",
      subtitle: "Future-ready infrastructure — excavation, civil construction, canal & dam projects.",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(145deg, #06B6D4, #000)",
      url: "https://sarswatiinfra.com/",
    },
  ];

  return (
    <section id="projects" className="project-section">
      <div className="content">
        <div className="section-header">
          <SplitText
            text="Built With Precision"
            tag="h2"
            className="section-title"
            delay={60}
            duration={1.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
          <BlurText
            text="Explore My Built Websites"
            delay={80}
            animateBy="words"
            direction="top"
            className="section-subtitle"
          />
        </div>

        <ChromaGrid items={projects} radius={300} columns={3} damping={0.45} fadeOut={0.6} />
      </div>
    </section>
  );
};

export default ProjectShowcase;
