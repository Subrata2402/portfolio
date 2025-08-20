import React, { useState, useEffect } from 'react';
import { FaCode, FaPaintBrush, FaMobile, FaRegUser, FaLaptopCode } from 'react-icons/fa';
import { BsGlobe, BsPersonWorkspace } from 'react-icons/bs';
import { GiGraduateCap } from 'react-icons/gi';
import './About.css';

function InfoCard({ icon, label, value, delay }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`info-card ${isVisible ? 'slide-in' : ''}`}>
            <div className="info-icon">
                {icon}
            </div>
            <div className="info-content">
                <span className="info-label">{label}</span>
                <span className="info-value">{value}</span>
            </div>
        </div>
    );
}

function ServiceCard({ icon, title, description, delay }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`service-card ${isVisible ? 'fade-up' : ''}`}>
            <div className="service-icon">
                {icon}
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

function About() {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [imageVisible, setImageVisible] = useState(false);

    useEffect(() => {
        document.title = "Portfolio - About";
        
        const headerTimer = setTimeout(() => {
            setHeaderVisible(true);
        }, 100);

        const imageTimer = setTimeout(() => {
            setImageVisible(true);
        }, 300);

        return () => {
            clearTimeout(headerTimer);
            clearTimeout(imageTimer);
        };
    }, []);

    const services = [
        {
            icon: <FaCode />,
            title: "Web Development",
            description: "Building responsive and modern web applications using latest technologies",
            delay: 400
        },
        {
            icon: <FaLaptopCode />,
            title: "Backend Development",
            description: "Creating robust APIs and server-side applications with Node.js and databases",
            delay: 600
        },
        {
            icon: <FaMobile />,
            title: "Mobile Development",
            description: "Developing cross-platform mobile applications using Flutter framework",
            delay: 800
        }
    ];

    return (
        <div className='about-page'>
            <div className="about-hero">
                <div className="hero-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>
                </div>
                
                <div className="hero-content">
                    <div className={`hero-text ${headerVisible ? 'fade-in-left' : ''}`}>
                        <span className="greeting">Hello, I'm</span>
                        <h1 className="hero-title">Subrata Das</h1>
                        <h2 className="hero-subtitle">Web & App Developer</h2>
                        <p className="hero-description">
                            I am a passionate web and app developer with 2+ years of experience. 
                            I specialize in creating modern, responsive applications using cutting-edge 
                            technologies like React.js, Node.js, Python, and Flutter.
                        </p>
                    </div>
                    
                    <div className={`hero-image ${imageVisible ? 'fade-in-right' : ''}`}>
                        <div className="image-container">
                            <img src="avatarlogo.png" alt="Profile" />
                            <div className="image-glow"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-section">
                <div className="section-header">
                    <h3>What I Do</h3>
                    <div className="section-line"></div>
                </div>
                
                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={service.delay}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About;