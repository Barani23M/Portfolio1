import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="app">
      <div className="cursor-glow" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}></div>
      
      <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span>BARANI</span>
          </div>
          <nav>
            <ul className="nav-links">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map(item => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={activeSection === item ? 'active' : ''}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-background">
            <div className="grid-overlay"></div>
          </div>
          <div className="container hero-container">
            <div className="hero-content animate-slide-up">
              <div className="hero-badge">👋 Welcome to my portfolio</div>
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Barani</span>
              </h1>
              <h2 className="hero-subtitle">
                <span className="typing-effect">Aspiring Cyber Security Analyst</span>
              </h2>
              <p className="hero-description">
                B.E Computer Science & Engineering student with strong knowledge in networking, web security, 
                Linux, vulnerability assessment, and secure backend development. Skilled in identifying security 
                issues, analyzing threats, and developing secure APIs.
              </p>
              <div className="hero-cta">
                <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                  <span>View Projects</span>
                  <span className="btn-arrow">→</span>
                </button>
                <a href="/resume.pdf" download className="btn-secondary">
                  Download Resume
                </a>
                <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                  Let's Connect
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Certifications</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">🏆</div>
                  <div className="stat-label">Hackathon Winner</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-wrapper">
                <div className="image-glow"></div>
                <img src={`${import.meta.env.BASE_URL}profile.png`} alt="Barani" className="profile-image" />
                <div className="floating-card card-1">
                  <span className="card-icon">🔐</span>
                  <span className="card-text">Cyber Security</span>
                </div>
                <div className="floating-card card-2">
                  <span className="card-icon">🛡️</span>
                  <span className="card-text">SOC Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">About Me</span>
              <h2 className="section-title">Know More About My Journey</h2>
            </div>
            <div className="about-content">
              <div className="about-card">
                <div className="card-icon-large">🎯</div>
                <h3>Objective</h3>
                <p>
                  Aspiring Cyber Security Analyst with strong knowledge in networking, web security, Linux, 
                  vulnerability assessment, and secure backend development. Seeking a Cyber Security / SOC Analyst 
                  position to apply technical and analytical skills to protect systems and detect threats.
                </p>
              </div>
              <div className="about-card">
                <div className="card-icon-large">🎓</div>
                <h3>Education</h3>
                <p>
                  <strong>B.E - Computer Science & Engineering</strong><br/>
                  Excel Engineering College (2022 - 2026)<br/>
                  CGPA: 7.95<br/><br/>
                  HSC: 81% | SSLC: 96%<br/>
                  Vaagai Vidhiyalaya Matric Hr Sec School, Dharmapuri
                </p>
              </div>
              <div className="about-card">
                <div className="card-icon-large">🏆</div>
                <h3>Achievement</h3>
                <p>
                  <strong>Won the AppViewX Payoda Hackathon</strong><br/><br/>
                  Areas of Interest: Incident Response & Digital Forensics, Malware Analysis & Reverse Engineering, 
                  Cloud Security (AWS/Azure Basics), Security Automation using Python
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Experience</span>
              <h2 className="section-title">Professional Journey</h2>
            </div>
            <div className="experience-grid">
              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-logo">CI</div>
                  <div className="experience-info">
                    <h3>Cyber Security & Ethical Hacking Intern</h3>
                    <h4>Crescent Infotech</h4>
                    <span className="experience-date">30 Days Internship</span>
                  </div>
                </div>
                <ul className="experience-list">
                  <li>Gained hands-on experience in cyber security fundamentals and ethical hacking techniques.</li>
                  <li>Learned about vulnerability assessment and penetration testing methodologies.</li>
                  <li>Explored various security tools and practices used in the industry.</li>
                </ul>
                <div className="experience-tags">
                  <span className="tag">Cyber Security</span>
                  <span className="tag">Ethical Hacking</span>
                  <span className="tag">Security Tools</span>
                </div>
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-logo">NX</div>
                  <div className="experience-info">
                    <h3>Network Security & Monitoring Intern</h3>
                    <h4>NxtLogic Solutions</h4>
                    <span className="experience-date">30 Days Internship</span>
                  </div>
                </div>
                <ul className="experience-list">
                  <li>Worked on network security protocols and monitoring techniques.</li>
                  <li>Gained experience with SIEM tools and security logging practices.</li>
                  <li>Learned about threat detection and incident response procedures.</li>
                </ul>
                <div className="experience-tags">
                  <span className="tag">Network Security</span>
                  <span className="tag">SIEM</span>
                  <span className="tag">Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Skills</span>
              <h2 className="section-title">Technical Expertise</h2>
            </div>
            <div className="skills-container">
              {[
                { category: "🔐 Security", icon: "🔐", items: ["Network Security", "SIEM Tools", "Linux & Windows Security", "Web Application Security", "Threat & Vulnerability Analysis", "Malware Analysis"] },
                { category: "🛠️ Tools", icon: "🛠️", items: ["Docker", "OWASP", "Git", "SIEM Tools"] },
                { category: "💻 Programming", icon: "💻", items: ["Java", "Python (Basic)", "SQL", "Flutter", "Web Development"] },
                { category: "📜 Certifications", icon: "📜", items: ["Google Cybersecurity Professional", "Ethical Hacking Essentials", "SOC Analyst Essentials", "Network Security Fundamentals", "Python for Cyber Security", "Intro to Cyber Security"] }
              ].map((group, gIndex) => (
                <div key={group.category} className="skill-category">
                  <div className="category-header">
                    <span className="category-icon">{group.icon}</span>
                    <h3>{group.category.substring(3)}</h3>
                  </div>
                  <div className="skills-grid">
                    {group.items.map((skill, index) => (
                      <div key={skill} className="skill-item" style={{ animationDelay: `${(gIndex * 4 + index) * 0.05}s` }}>
                        <span className="skill-name">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Projects</span>
              <h2 className="section-title">Featured Work</h2>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-icon">🎣</div>
                </div>
                <div className="project-content">
                  <h3>Phishing URL / Website Detector</h3>
                  <p>Developed a Java-based Phishing URL and Website Detection system using machine learning to classify malicious links with up to 95% accuracy. Implemented advanced feature extraction including HTTPS validation, IP-based host detection, subdomain depth, suspicious HTML/JS patterns, and WHOIS domain age analysis.</p>
                  <div className="tech-stack">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">Machine Learning</span>
                    <span className="tech-tag">Random Forest</span>
                    <span className="tech-tag">SVM</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-icon">👶</div>
                </div>
                <div className="project-content">
                  <h3>Maternal and Child Health Care System</h3>
                  <p>Secured the Pregnancy & Baby Care Assistant by implementing encrypted data storage, secure authentication, and strict role-based access control. Protected backend APIs using OWASP Top 10 practices, preventing SQL injection, XSS, CSRF, and unauthorized access. Performed vulnerability assessments and penetration testing.</p>
                  <div className="tech-stack">
                    <span className="tech-tag">OWASP Top 10</span>
                    <span className="tech-tag">HTTPS/TLS</span>
                    <span className="tech-tag">Security Logging</span>
                    <span className="tech-tag">Pen Testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Contact</span>
              <h2 className="section-title">Let's Work Together</h2>
              <p className="section-description">
                I am currently open to new opportunities in Cyber Security. Whether you have a question 
                or just want to connect, feel free to reach out.
              </p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email</h3>
                <a href="mailto:jayambarani27@gmail.com" className="contact-email">jayambarani27@gmail.com</a>
                <a href="mailto:jayambarani27@gmail.com" className="contact-link">Send a message →</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/919489315805" target="_blank" rel="noopener noreferrer" className="contact-email">+91 9489315805</a>
                <a href="https://wa.me/919489315805" target="_blank" rel="noopener noreferrer" className="contact-link">Message on WhatsApp →</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Location</h3>
                <p>Dharmapuri, Tamil Nadu</p>
                <span className="contact-link">Available for opportunities</span>
              </div>
            </div>
            <div className="cta-section">
              <h3>Ready to secure your digital future?</h3>
              <button className="btn-primary-large" onClick={() => window.location.href = 'mailto:jayambarani27@gmail.com'}>
                <span>Get In Touch</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">⚡</span>
                <span>BARANI A</span>
              </div>
              <p>Aspiring Cyber Security Analyst</p>
            </div>
            <div className="footer-links">
              <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
              <a href="#about" onClick={() => scrollToSection('about')}>About</a>
              <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
              <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Barani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
