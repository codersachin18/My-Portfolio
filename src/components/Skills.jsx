import React from "react";
import { FaPhp, FaNodeJs } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiFlutter, SiTypescript, SiTailwindcss } from "react-icons/si";
import { MdPhoneAndroid, MdWeb } from "react-icons/md";

const skillsData = [
  { icon: <SiReact size={40} color="#61DAFB" />, title: "React Native" },
  { icon: <SiFlutter size={40} color="#54C5F8" />, title: "Flutter" },
  { icon: <SiNextdotjs size={40} color="#ffffff" />, title: "Next JS" },
  { icon: <SiReact size={40} color="#61DAFB" />, title: "React JS" },
  { icon: <FaNodeJs size={40} color="#68A063" />, title: "Node JS & Express" },
  { icon: <FaPhp size={40} color="#777BB4" />, title: "PHP & MySQL" },
  { icon: <SiTypescript size={40} color="#3178C6" />, title: "TypeScript" },
  { icon: <SiTailwindcss size={40} color="#38BDF8" />, title: "Tailwind CSS" },
  { icon: <MdPhoneAndroid size={40} color="#A8D8A8" />, title: "App Development" },
  { icon: <MdWeb size={40} color="#F2994A" />, title: "Web Development" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
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
