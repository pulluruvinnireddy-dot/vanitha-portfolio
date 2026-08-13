import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  FaArrowRight, FaCode, FaGithub, FaLinkedin, FaEnvelope,
  FaDownload, FaJava, FaReact, FaDatabase, FaCloud,
  FaBriefcase, FaGraduationCap, FaBars, FaTimes, FaExternalLinkAlt
} from "react-icons/fa";
import "./styles.css";

const skills = [
  { name: "Java", icon: <FaJava />, level: "Core & OOP" },
  { name: "React.js", icon: <FaReact />, level: "Frontend" },
  { name: "Spring Boot", icon: <FaCode />, level: "Backend" },
  { name: "MySQL", icon: <FaDatabase />, level: "Database" },
  { name: "Salesforce", icon: <FaCloud />, level: "Platform" },
  { name: "C", icon: <FaCode />, level: "Programming" },
  { name: "GitHub", icon: <FaGithub />, level: "Version Control" },
  { name: "Problem Solving", icon: <FaCode />, level: "DSA & Coding" }
];

const projects = [
  {
    title: "College ERP Management System",
    type: "Full Stack",
    description: "A college management platform with modules for students, faculty, attendance, marks, timetable and notices.",
    tech: ["React.js", "Spring Boot", "MySQL"],
    icon: "🎓"
  },
  {
    title: "Bank Application",
    type: "Full Stack",
    description: "A banking application with authentication and core banking operations including deposit, withdrawal and transfer.",
    tech: ["React.js", "Spring Boot", "MySQL"],
    icon: "🏦"
  },
  {
    title: "Music Player",
    type: "Full Stack",
    description: "A modern music player interface connected to a Spring Boot backend for managing songs.",
    tech: ["React.js", "Spring Boot", "MySQL"],
    icon: "🎵"
  },
  {
    title: "Online Shopping",
    type: "Frontend",
    description: "A responsive shopping experience focused on a modern fashion-store interface.",
    tech: ["React.js", "Vite", "CSS"],
    icon: "🛍️"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const ids = ["home", "about", "skills", "experience", "projects", "education", "contact"];
      const y = window.scrollY + 140;
      let current = "home";
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />

      <header className="navbar">
        <div className="nav-inner">
          <button className="brand" onClick={() => go("home")}>
            <span className="brand-mark">PV</span>
            <span>Pulluru Vanitha</span>
          </button>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["home","about","skills","experience","projects","education","contact"].map(item => (
              <button
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => go(item)}
              >
                {item}
              </button>
            ))}
          </nav>
          <button className="nav-cta" onClick={() => go("contact")}>Let's Talk <FaArrowRight /></button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span /> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>Hi, I'm <span>Vanitha.</span></h1>
            <h2>Final Year B.Tech ECE Student &amp; <strong>Aspiring Software Developer</strong></h2>
            <p>
              I enjoy building practical software, solving coding problems and learning
              technologies that turn ideas into useful products.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => go("projects")}>
                View My Work <FaArrowRight />
              </button>
              <a className="secondary-btn" href="/Profile.pdf" target="_blank" rel="noreferrer">
                View Resume <FaDownload />
              </a>
            </div>
            <div className="social-row">
              <a href="https://www.linkedin.com/in/pulluru-vanitha-ab9b8a41b" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="mailto:pulluruvanithareddy@gmail.com"><FaEnvelope /></a>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="hero-card">
              <div className="code-top"><span></span><span></span><span></span><b>developer.java</b></div>
              <div className="code-body">
                <p><i>01</i> <em>public class</em> <strong>Developer</strong> {"{"}</p>
                <p><i>02</i>&nbsp;&nbsp;String name = <mark>"Vanitha"</mark>;</p>
                <p><i>03</i>&nbsp;&nbsp;String role = <mark>"Software Developer"</mark>;</p>
                <p><i>04</i>&nbsp;&nbsp;String focus = <mark>"Java + Full Stack"</mark>;</p>
                <p><i>05</i>&nbsp;&nbsp;boolean learning = <mark>true</mark>;</p>
                <p><i>06</i> {"}"}</p>
              </div>
            </div>
            <div className="float-badge badge-java"><FaJava /> Java</div>
            <div className="float-badge badge-react"><FaReact /> React</div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span>01 / ABOUT</span>
            <h2>A little about me</h2>
          </div>
          <div className="about-grid">
            <div className="about-main">
              <p className="lead">
                I am a Final Year B.Tech student in Electronics and Communication Engineering
                with a strong interest in software development and Salesforce.
              </p>
              <p>
                I am passionate about learning new technologies and improving my problem-solving
                skills through coding and real-world projects. My current focus is on Java,
                full-stack development and building clean, useful applications.
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-number">9.4</div>
              <div className="stat-label">Academic Score / CGPA</div>
              <div className="stat-line" />
              <small>Based on the profile information provided</small>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="section-heading">
            <span>02 / SKILLS</span>
            <h2>Tools I work with</h2>
          </div>
          <div className="skills-grid">
            {skills.map(skill => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <div><h3>{skill.name}</h3><p>{skill.level}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <span>03 / EXPERIENCE</span>
            <h2>Where I've worked</h2>
          </div>
          <div className="timeline">
            <div className="timeline-dot"><FaBriefcase /></div>
            <div className="timeline-card">
              <div className="timeline-top">
                <div>
                  <span className="tag">EXPERIENCE</span>
                  <h3>Tata Electronics</h3>
                </div>
                <span className="date">March 2026 — Present</span>
              </div>
              <p>
                Company experience listed in the supplied profile. This section is intentionally
                kept concise because the profile does not provide a detailed job description.
              </p>
              <span className="location">Bangalore, India</span>
            </div>
          </div>
        </section>

        <section id="projects" className="section alt">
          <div className="section-heading">
            <span>04 / PROJECTS</span>
            <h2>Things I've built</h2>
            <p>Selected projects from my full-stack and frontend learning journey.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-visual">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-emoji">{project.icon}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <span>05 / EDUCATION</span>
            <h2>My academic journey</h2>
          </div>
          <div className="education-card">
            <div className="edu-icon"><FaGraduationCap /></div>
            <div className="edu-content">
              <span className="tag">BACHELOR OF TECHNOLOGY</span>
              <h3>Sri Venkatesa Perumal College of Engineering and Technology</h3>
              <p>Electronics and Communication Engineering (ECE)</p>
              <span className="edu-date">July 2023 — July 2027</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <span className="eyebrow">06 / CONTACT</span>
              <h2>Let's build something<br /><span>meaningful together.</span></h2>
              <p>I'm open to software development opportunities, internships and projects where I can learn and contribute.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:pulluruvanithareddy@gmail.com"><FaEnvelope /><span>pulluruvanithareddy@gmail.com</span><FaExternalLinkAlt /></a>
              <a href="https://www.linkedin.com/in/pulluru-vanitha-ab9b8a41b" target="_blank" rel="noreferrer"><FaLinkedin /><span>LinkedIn Profile</span><FaExternalLinkAlt /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /><span>GitHub</span><FaExternalLinkAlt /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Pulluru Vanitha</span>
        <span>Built with React &amp; CSS</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
