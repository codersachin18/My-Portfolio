import React from "react";
import { motion } from "framer-motion";
import "./WebSoftware.css";
import dashboard from "../assets/b-dashboard.png";
import wellEdu from "../assets/well-edu.png";
import insta from "../assets/insta.png";
import yt from "../assets/yt.png";
import SplitText from "./SplitText";
import BlurText from "./BlurText";

const WebSoftware = () => {
  const softwares = [
    {
      img: insta,
      title: "Instagram Reels & Post Downloader",
      desc: "I built an Instagram Reels & Post downloader — a web tool that lets users download Instagram Reels, Stories & Posts instantly without any login. Powered by yt-dlp CLI + custom scraping logic on the backend, a clean React.js frontend, and a cloud backend running 24/7.",
      features: [
        "Download Reels, Stories & Posts",
        "HD Quality Videos",
        "No login required",
        "Works instantly on web",
      ],
      tech: [
        { name: "yt-dlp CLI", icon: "fas fa-terminal" },
        { name: "Scraping Logic", icon: "fas fa-code" },
        { name: "React.js", icon: "fab fa-react" },
        { name: "REST API", icon: "fas fa-plug" },
        { name: "Cloud Backend", icon: "fas fa-cloud" },
        { name: "Node.js", icon: "fab fa-node-js" },
      ],
      note: null,
      link: "https://instaa-saver.web.app/",
      btnLabel: "Try Insta Saver",
    },
    {
      img: yt,
      title: "YouTube Analyzer",
      label: "SaaS",
      desc: "A clean, modern SaaS-style dashboard to analyze any YouTube channel instantly. Paste a competitor's URL and get real data — top videos, growth trends, engagement metrics, audience breakdown, and more. Channel Analysis, Dashboard Overview (subscribers, total views, avg video duration, engagement rate), Top Videos with sort/filter, Analytics Charts (30-day views & impressions), Audience Insights (top countries, age distribution, gender split, device breakdown), Quick Analytics for instant competitor intelligence, Export reports, Dark Mode & Mobile Responsive.",
      tech: [
        { name: "Next.js 16", icon: "fab fa-react" },
        { name: "TypeScript", icon: "fas fa-code" },
        { name: "Tailwind CSS v4", icon: "fas fa-paint-brush" },
        { name: "Recharts", icon: "fas fa-chart-line" },
        { name: "YouTube Data API v3", icon: "fab fa-youtube" },
        { name: "Vercel", icon: "fas fa-cloud" },
      ],
      note: null,
      link: "https://analytics-dashboard-8.vercel.app/",
      btnLabel: "Visit Dashboard",
    },
    {
      img: dashboard,
      title: "Branch Management Dashboard",
      label: "SaaS",
      desc: "A comprehensive custom-built SaaS dashboard for multi-branch management. Features include adding new branches, tracking monthly collections, profit/loss analysis, interactive charts, and complete analytics. The system provides real-time insights into branch performance, student enrollment tracking, payment management, and automated reporting. Built with a clean, intuitive interface for seamless branch operations and data-driven decision making.",
      tech: [
        { name: "PHP", icon: "fab fa-php" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "HTML/CSS", icon: "fab fa-html5" },
        { name: "WordPress", icon: "fab fa-wordpress" },
      ],
      note: "Live preview not available - Private SaaS product designed on-demand for client",
      link: null,
    },
    {
      img: wellEdu,
      title: "Profile Matching Platform",
      desc: "A trusted all-caste Vadhu–Var matchmaking platform serving all communities across Maharashtra. Features include verified profile listings, advanced search filters by community/caste/location, secure member authentication, affordable membership plans, profile verification system, and real-time updates. Built with manual profile screening, transparent matchmaking process, and community-focused approach for genuine, safe connections.",
      tech: [
        { name: "PHP", icon: "fab fa-php" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "HTML/CSS", icon: "fab fa-html5" },
        { name: "WordPress", icon: "fab fa-wordpress" },
      ],
      note: null,
      link: "https://welleducated.in/",
    },
  ];

  return (
    <section id="web-software" className="web-software-section">
      <div className="web-software-container">
        <div className="section-header">
          <SplitText
            text="Web-Based Software"
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
            text="Custom web-based systems built to meet specific project needs"
            delay={80}
            animateBy="words"
            direction="top"
            className="section-subtitle"
          />
        </div>

        <div className="software-grid">
          {softwares.map((software, index) => (
            <motion.div
              key={index}
              className="software-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="software-image">
                {software.label && (
                  <span className="software-label">{software.label}</span>
                )}
                <img src={software.img} alt={software.title} />
              </div>
              
              <div className="software-content">
                <h3 className="software-title">{software.title}</h3>
                <p className="software-desc">{software.desc}</p>
                
                {software.features && (
                  <ul className="software-features">
                    {software.features.map((f, i) => (
                      <li key={i}>
                        <i className="fas fa-check-circle"></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="tech-stack">
                  <h4>Built Using:</h4>
                  <div className="tech-tags">
                    {software.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        <i className={tech.icon}></i>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                {software.note && (
                  <div className="software-note">
                    <i className="fas fa-info-circle"></i>
                    <span>{software.note}</span>
                  </div>
                )}

                {software.link && (
                  <a
                    href={software.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="software-btn"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    {software.btnLabel || "Visit Platform"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebSoftware;
