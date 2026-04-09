import React, { useRef, useEffect } from 'react';
import './MyApps.css';
import SplitText from './SplitText';
import BlurText from './BlurText';

import instaIcon from '../../public/app-icons/insta-saver-icon (1).png';
import syloIcon from '../../public/app-icons/sylo agent icon.png';
import statusIcon from '../../public/app-icons/Status Saver icon.png';
import wpIcon from '../../public/app-icons/wp-run icon.svg';

const apps = [
  {
    icon: instaIcon,
    name: 'Insta Saver',
    type: 'Mobile App',
    typeClass: '',
    desc: 'Download Instagram Reels, Stories & Posts in HD — no login required. Works instantly from your phone.',
    tech: ['React Native', 'TypeScript', 'Java', 'yt-dlp', 'REST API', 'Cloud Backend'],
    btn: 'Download App',
    btnLink: 'https://instaa-saver.web.app/',
  },
  {
    icon: syloIcon,
    name: 'Sylo Agent',
    type: 'Mobile App',
    typeClass: '',
    desc: 'Android AI assistant that executes real tasks by voice or text — calling, messaging, app control & more.',
    tech: ['React Native', 'Android Permissions', 'API Limiting', 'Token Setup', 'AI Tuning'],
    btn: 'Download Now',
    btnLink: 'https://sylo-ai.web.app/get-app',
  },
  {
    icon: wpIcon,
    name: 'WP Run Now',
    type: 'Desktop App',
    typeClass: 'desktop',
    desc: 'WP Run Now is a free Windows desktop app that lets you create and manage local WordPress sites — similar to LocalWP, but with no Docker dependency. Everything is bundled inside the app: PHP, MySQL, Nginx, and WP-CLI.',
    features: [
      'One-click WordPress install',
      'Bundled PHP 8.2, MySQL 8.0, Nginx',
      'Local domains (mysite.local)',
      'WP-CLI built-in shell',
      'One-click admin login',
      'Multiple sites simultaneously',
      'Site backup (files + SQL)',
      'PHP version switching',
      'Start/Stop with DB dump',
      'Safe delete with confirmation',
    ],
    tech: ['Electron', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Axios', 'Framer Motion', 'Node.js'],
    btn: 'Download App Now',
    btnLink: 'https://wp-runs.web.app/',
  },
  {
    icon: statusIcon,
    name: 'Status Saver',
    type: 'Mobile App',
    typeClass: '',
    desc: 'Save WhatsApp statuses instantly in HD — free, fast, no watermark. Supports photos & videos with smart storage management.',
    tech: ['Flutter', 'Java', 'Android Storage', 'Media Libraries', 'File Manager'],
    btn: 'Download on APKPure',
    btnLink: 'https://apkpure.com/p/com.statussaver.app',
    badge: '✅ Successfully published on APKPure',
  },
];

const AppCard = ({ app }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--glow-x', `${x}%`);
      el.style.setProperty('--glow-y', `${y}%`);
      el.style.setProperty('--glow-intensity', '1');
    };

    const handleMouseLeave = () => {
      el.style.setProperty('--glow-intensity', '0');
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="app-card">
      <div className="app-card-top">
        <img src={app.icon} alt={app.name} className="app-icon-img" />
        <span className={`app-type-label ${app.typeClass}`}>{app.type}</span>
      </div>

      <div className="app-card-content">
        <h3 className="app-name">{app.name}</h3>
        {app.features ? (
          <>
            <p className="app-desc">{app.desc}</p>
            <p className="app-features-title">Features</p>
            <ul className="app-features">
              {app.features.map((f, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle"></i>
                  {f}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="app-desc">{app.desc}</p>
        )}
        <div className="app-tech-tags">
          {app.tech.map((t, i) => (
            <span key={i} className="app-tech-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="app-card-bottom">
        {app.btnLink ? (
          <a href={app.btnLink} target="_blank" rel="noopener noreferrer" className="app-btn">
            ↓ {app.btn}
          </a>
        ) : (
          <span className="app-btn disabled">{app.btn}</span>
        )}
        {app.badge && (
          <span className="app-badge">{app.badge}</span>
        )}
      </div>
    </div>
  );
};

const MyApps = () => (
  <section id="apps" className="apps-section">
    <div className="apps-container">
      <div className="apps-header">
        <SplitText
          text="My Apps"
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
          text="Apps I built — mobile & desktop"
          delay={80}
          animateBy="words"
          direction="top"
          className="sub-heading"
        />
      </div>

      <div className="apps-grid">
        {apps.map((app, i) => <AppCard key={i} app={app} />)}
      </div>
    </div>
  </section>
);

export default MyApps;
