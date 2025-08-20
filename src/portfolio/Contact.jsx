import React, { useEffect, useState } from 'react'
import './Contact.css';
import { SlLocationPin } from 'react-icons/sl';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import { IoLogoDiscord, IoShareSocialOutline, IoSend } from 'react-icons/io5';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import { BiUser, BiEnvelope, BiMessage } from 'react-icons/bi';

function ContactCard({ icon, title, info, link, delay, type }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const handleClick = () => {
        if (type === 'email') {
            window.open(`mailto:${info}`, '_blank');
        } else if (type === 'phone') {
            window.open(`tel:${info}`, '_blank');
        } else if (type === 'location') {
            window.open(`https://maps.google.com/?q=${info}`, '_blank');
        }
    };

    return (
        <div 
            className={`contact-card ${isVisible ? 'slide-in' : ''} ${type ? 'clickable' : ''}`}
            onClick={type ? handleClick : undefined}
        >
            <div className="contact-icon">
                {icon}
            </div>
            <div className="contact-info">
                <h4>{title}</h4>
                <p>{info}</p>
                {type && <span className="click-hint">Click to {type === 'email' ? 'email' : type === 'phone' ? 'call' : 'view location'}</span>}
            </div>
        </div>
    );
}

function SocialLink({ href, icon, label, delay }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noreferrer"
            className={`social-link ${isVisible ? 'bounce-in' : ''}`}
            aria-label={label}
        >
            {icon}
        </a>
    );
}

function Contact() {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    useEffect(() => {
        document.title = "Portfolio - Contact";
        
        const timer = setTimeout(() => {
            setHeaderVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        }, 2000);
    };

    const socialLinks = [
        {
            href: "https://www.github.com/Subrata2402",
            icon: <FaGithubSquare />,
            label: "GitHub",
            delay: 300
        },
        {
            href: "https://www.linkedin.com/in/subrata-das-867903243",
            icon: <FaLinkedin />,
            label: "LinkedIn",
            delay: 400
        },
        {
            href: "https://www.facebook.com/subrata3250",
            icon: <FaFacebookSquare />,
            label: "Facebook",
            delay: 500
        },
        {
            href: "https://twitter.com/Subrata3250",
            icon: <FaTwitter />,
            label: "Twitter",
            delay: 600
        },
        {
            href: "https://instagram.com/subrata2402",
            icon: <FaInstagram />,
            label: "Instagram",
            delay: 700
        }
    ];

    return (
        <div className="contact-page">
            <div className="contact-background">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
            </div>

            <div className="contact-container">
                <div className={`contact-header ${headerVisible ? 'fade-in' : ''}`}>
                    <div className="header-content">
                        <span className="section-badge">
                            <FaEnvelope />
                            Get In Touch
                        </span>
                        <h1 className="main-title">Contact Me</h1>
                        <p className="subtitle">
                            Let's work together to bring your ideas to life. I'm always excited to discuss new projects and opportunities.
                        </p>
                    </div>
                </div>

                <div className="contact-content">
                    <div className="contact-info-section">
                        <h2 className="section-title">Get in Touch</h2>
                        <p className="section-description">
                            Feel free to reach out to me through any of these channels. I'll get back to you as soon as possible!
                        </p>

                        <div className="contact-cards">
                            <ContactCard
                                icon={<MdLocationOn />}
                                title="My Address"
                                info="Midnapore, West Bengal, 721101"
                                type="location"
                                delay={200}
                            />
                            <ContactCard
                                icon={<MdEmail />}
                                title="Email Me"
                                info="subratadas3250@gmail.com"
                                type="email"
                                delay={400}
                            />
                            <ContactCard
                                icon={<MdPhone />}
                                title="Call Me"
                                info="+91 9674026884"
                                type="phone"
                                delay={600}
                            />
                        </div>

                        <div className="social-section">
                            <h3>Follow Me</h3>
                            <div className="social-links">
                                {socialLinks.map((link, index) => (
                                    <SocialLink
                                        key={index}
                                        href={link.href}
                                        icon={link.icon}
                                        label={link.label}
                                        delay={link.delay}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-section">
                        <h2 className="section-title">Send Message</h2>
                        <p className="section-description">
                            Have a project in mind? Drop me a message and let's discuss how we can work together.
                        </p>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <div className="input-container">
                                    <BiUser className="input-icon" />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-container">
                                    <BiEnvelope className="input-icon" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-container">
                                    <MdSend className="input-icon" />
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group message-group">
                                <div className="input-container textarea-container">
                                    <BiMessage className="input-icon" />
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : submitStatus === 'success' ? (
                                    <>
                                        <FaPaperPlane />
                                        <span>Message Sent!</span>
                                    </>
                                ) : (
                                    <>
                                        <IoSend />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="success-message">
                                    Thank you for your message! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;