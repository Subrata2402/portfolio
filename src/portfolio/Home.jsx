import React, { useEffect, useState } from 'react'
import './Home.css';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDownload, FaEnvelope, FaCode, FaRocket, FaMobile } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { RxDiscordLogo } from 'react-icons/rx';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { SiReact, SiJavascript, SiPython, SiNodedotjs, SiMongodb, SiTypescript, SiHtml5, SiCss3, SiGit, SiDocker, SiFirebase, SiExpress, SiTailwindcss } from 'react-icons/si';

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        "Full Stack Developer",
        "React.js Developer", 
        "Python Developer",
        "Web Developer",
        "Mobile App Developer"
    ];

    useEffect(() => {
        document.title = "Portfolio - Home";
        
        // Trigger animations
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const typingSpeed = isDeleting ? 100 : 150;
        const pauseTime = isDeleting ? 1000 : 2000;

        const handleTyping = () => {
            const current = roles[currentIndex];
            
            if (isDeleting) {
                setCurrentText(current.substring(0, currentText.length - 1));
            } else {
                setCurrentText(current.substring(0, currentText.length + 1));
            }

            if (!isDeleting && currentText === current) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const typingTimer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimer);
    }, [currentText, isDeleting, currentIndex, roles]);

    const technologies = [
        { icon: <SiReact />, name: "React.js", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiPython />, name: "Python", color: "#3776AB" },
        { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
        { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
        { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
        { icon: <SiGit />, name: "Git", color: "#F05032" },
        { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
        { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
        { icon: <SiExpress />, name: "Express.js", color: "#000000" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" }
    ];

    const socialLinks = [
        { href: "https://www.github.com/Subrata2402", icon: <FaGithub />, label: "GitHub", color: "#333" },
        { href: "https://www.linkedin.com/in/subrata-das-867903243", icon: <FaLinkedinIn />, label: "LinkedIn", color: "#0077B5" },
        { href: "https://www.facebook.com/subrata3250", icon: <FaFacebookF />, label: "Facebook", color: "#1877F2" },
        { href: "https://discord.com/channels/@me/660337342032248832", icon: <RxDiscordLogo />, label: "Discord", color: "#5865F2" },
        { href: "https://twitter.com/Subrata3250", icon: <BsTwitterX />, label: "Twitter", color: "#1DA1F2" }
    ];

    return (
        <div className="home-page">
            <div className="home-background">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
                <div className="floating-elements">
                    {technologies.map((tech, index) => (
                        <div 
                            key={index} 
                            className={`floating-tech tech-${index + 1}`}
                            style={{ color: tech.color }}
                        >
                            {tech.icon}
                        </div>
                    ))}
                </div>
            </div>

            <div className="home-container">
                <div className="home-content">
                    <div className={`home-text ${isVisible ? 'slide-in' : ''}`}>
                        <div className="greeting">
                            <span className="hello">👋 Hello, I'm</span>
                        </div>
                        
                        <h1 className="main-name">
                            <span className="first-name">Subrata</span>
                            <span className="last-name">Das</span>
                        </h1>
                        
                        <div className="role-container">
                            <span className="role-prefix">I'm a </span>
                            <span className="dynamic-role">{currentText}</span>
                        </div>
                        
                        <p className="description">
                            Passionate developer with 2+ years of experience creating innovative web solutions. 
                            I specialize in building responsive websites, web applications, and mobile apps using 
                            modern technologies like React.js, Python, and Node.js.
                        </p>

                        <div className="stats-container">
                            <div className="stat-item">
                                <div className="stat-number">2+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Projects Built</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Client Satisfaction</div>
                            </div>
                        </div>
                        
                        <div className="action-buttons">
                            <a href="mailto:subratadas3250@gmail.com" className="btn primary-btn">
                                <FaEnvelope />
                                <span>Hire Me</span>
                            </a>
                            <a href="public/resume.pdf" target="_blank" rel="noreferrer" download className="btn secondary-btn">
                                <FaDownload />
                                <span>Download CV</span>
                            </a>
                        </div>
                        
                        <div className="social-links">
                            {/* <span className="social-label">Follow me:</span> */}
                            <div className="social-icons">
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={index}
                                        href={social.href} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className={`social-link ${isVisible ? 'bounce-in' : ''}`}
                                        style={{ '--delay': `${index * 0.1}s`, '--color': social.color }}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className={`home-visual ${isVisible ? 'fade-in' : ''}`}>
                        <div className="profile-container">
                            <div className="profile-card">
                                <div className="profile-image">
                                    <img src="avatarlogo.png" alt="Subrata Das - Full Stack Developer" />
                                    <div className="status-indicator">
                                        <span className="status-dot"></span>
                                        <span className="status-text">Available for work</span>
                                    </div>
                                </div>
                                
                                <div className="quick-info">
                                    <div className="info-item">
                                        <FaCode className="info-icon" />
                                        <span>Full Stack Developer</span>
                                    </div>
                                    <div className="info-item">
                                        <FaRocket className="info-icon" />
                                        <span>2+ Years Experience</span>
                                    </div>
                                    <div className="info-item">
                                        <FaMobile className="info-icon" />
                                        <span>Mobile & Web Apps</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className={`scroll-indicator ${isVisible ? 'slide-up' : ''}`}>
                    <div className="scroll-text">Scroll to explore</div>
                    <HiOutlineArrowDown className="scroll-arrow" />
                </div> */}
            </div>
        </div>
    )
}

export default Home;