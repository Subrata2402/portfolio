import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { BsCode, BsCodeSlash } from 'react-icons/bs';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="modern-footer">
            <div className="footer-background">
                <div className="footer-shape shape-1"></div>
                <div className="footer-shape shape-2"></div>
                <div className="footer-shape shape-3"></div>
            </div>

            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-section footer-brand">
                        <div className="brand-logo">
                            <img src="avatarlogo.png" alt="Subrata Das" />
                            <div className="brand-text">
                                <h3>Subrata Das</h3>
                                <p>Web & App Developer</p>
                            </div>
                        </div>
                        <p className="brand-description">
                            Passionate developer creating amazing digital experiences with modern technologies. 
                            Let's build something great together!
                        </p>
                        <div className="social-links">
                            <a href="https://github.com/Subrata2402" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/subrata-das" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com/subrata2402" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com/subrata2402" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section footer-nav">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/certificates">Certificates</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section footer-services">
                        <h4>Services</h4>
                        <ul>
                            <li><BsCode /> Web Development</li>
                            <li><BsCodeSlash /> Backend Development</li>
                            <li><BsCode /> Mobile Development</li>
                            <li><BsCodeSlash /> API Development</li>
                        </ul>
                    </div>

                    <div className="footer-section footer-contact">
                        <h4>Get In Touch</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <MdEmail />
                                <span>subratadas3250@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <MdPhone />
                                <span>+91 9749844740</span>
                            </div>
                            <div className="contact-item">
                                <MdLocationOn />
                                <span>West Bengal, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>
                            &copy; {currentYear} Subrata Das. Made with <FaHeart className="heart-icon" /> using React.js
                        </p>
                        <p className="footer-tagline">
                            Crafting digital experiences, one line of code at a time.
                        </p>
                    </div>
                </div>
            </div>

            <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
                <FaArrowUp />
            </button>
        </footer>
    )
}

export default Footer;