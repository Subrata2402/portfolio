import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Certificates.css';
import { FaDownload, FaAward, FaCalendarAlt, FaBuilding, FaEye, FaFilter } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';

const certificatesData = [
    {
        id: 1,
        title: "VU Codefest 2023",
        issuer: "Vidyasagar University (Computer Science)",
        issueDate: "March 23, 2023",
        image: "certificates/vu-codefest.jpg",
        downloadPath: "/public/certificates/vu-codefest.jpg",
        category: "Competition",
        description: "Participated in university-level coding competition"
    },
    {
        id: 2,
        title: "Java Programming",
        issuer: "Great Learning Academy",
        issueDate: "February 12, 2023",
        image: "certificates/java-programming.png",
        downloadPath: "/public/certificates/java-programming.png",
        category: "Programming",
        description: "Comprehensive Java programming course completion"
    },
    {
        id: 3,
        title: "Python Fundamentals",
        issuer: "Great Learning Academy",
        issueDate: "April 23, 2023",
        image: "certificates/python-fundamentals-for-beginners.png",
        downloadPath: "/public/certificates/python-fundamentals-for-beginners.png",
        category: "Programming",
        description: "Python fundamentals and core concepts"
    },
    {
        id: 4,
        title: "Introduction to Python",
        issuer: "Skill Academy",
        issueDate: "August 20, 2022",
        image: "certificates/python-skill-academy.jpg",
        downloadPath: "/public/certificates/python-skill-academy.jpg",
        category: "Programming",
        description: "Basic Python programming concepts and syntax"
    },
    {
        id: 5,
        title: "HTML Tutorial",
        issuer: "Skill Academy",
        issueDate: "September 04, 2022",
        image: "certificates/html-tutorial.jpg",
        downloadPath: "/public/certificates/html-tutorial.jpg",
        category: "Web Development",
        description: "HTML markup language fundamentals"
    },
    {
        id: 6,
        title: "Python Core",
        issuer: "Sololearn",
        issueDate: "September 17, 2022",
        image: "certificates/python-core.png",
        downloadPath: "/public/certificates/python-core.png",
        category: "Programming",
        description: "Advanced Python core concepts and practices"
    }
];

function CertificateCard({ certificate, delay }) {
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const handleImageClick = () => {
        setShowOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
    };

    return (
        <>
            <div className={`certificate-card ${isVisible ? 'fade-up' : ''}`}>
                <div className="certificate-header">
                    <div className="certificate-badge">
                        <FaAward />
                    </div>
                    <div className="certificate-id">#{certificate.id.toString().padStart(2, '0')}</div>
                </div>

                <div className="certificate-image-container" onClick={handleImageClick}>
                    <img 
                        src={certificate.image} 
                        alt={certificate.title}
                        onLoad={() => setImageLoaded(true)}
                        className={imageLoaded ? 'loaded' : ''}
                    />
                    <div className="image-overlay">
                        <FaEye className="view-icon" />
                        <span>View Certificate</span>
                    </div>
                </div>

                <div className="certificate-content">
                    <h3 className="certificate-title">{certificate.title}</h3>
                    <p className="certificate-description">{certificate.description}</p>
                    
                    <div className="certificate-details">
                        <div className="detail-item">
                            <FaBuilding className="detail-icon" />
                            <span>{certificate.issuer}</span>
                        </div>
                        <div className="detail-item">
                            <FaCalendarAlt className="detail-icon" />
                            <span>{certificate.issueDate}</span>
                        </div>
                    </div>

                    <div className="certificate-category">
                        <span className="category-badge">{certificate.category}</span>
                    </div>

                    <a 
                        href={certificate.downloadPath} 
                        download 
                        className="download-btn"
                    >
                        <FaDownload />
                        <span>Download</span>
                    </a>
                </div>
            </div>

            {showOverlay && (
                <div className="certificate-modal" onClick={closeOverlay}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeOverlay}>&times;</button>
                        <img src={certificate.image} alt={certificate.title} />
                        <div className="modal-info">
                            <h3>{certificate.title}</h3>
                            <p>Issued by: {certificate.issuer}</p>
                            <p>Date: {certificate.issueDate}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function Certificates() {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredCertificates, setFilteredCertificates] = useState(certificatesData);

    useEffect(() => {
        document.title = "Portfolio - Certificates";
        
        const timer = setTimeout(() => {
            setHeaderVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let filtered = certificatesData;

        // Filter by category
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(cert => cert.category === selectedCategory);
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(cert =>
                cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                cert.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredCertificates(filtered);
    }, [searchTerm, selectedCategory]);

    const categories = ['All', ...new Set(certificatesData.map(cert => cert.category))];

    return (
        <div className="certificates-page">
            <div className="certificates-background">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
            </div>

            <div className="certificates-container">
                <div className={`certificates-header ${headerVisible ? 'fade-in' : ''}`}>
                    <div className="header-content">
                        <span className="section-badge">
                            <FaAward />
                            Achievements
                        </span>
                        <h1 className="main-title">Certificates & Awards</h1>
                        <p className="subtitle">
                            My journey of continuous learning and professional development
                        </p>
                    </div>
                </div>

                <div className="certificates-filters">
                    <div className="search-container">
                        <BiSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search certificates..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    
                    <div className="category-filters">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="certificates-count">
                        <span>{filteredCertificates.length} Certificate{filteredCertificates.length !== 1 ? 's' : ''}</span>
                    </div>
                </div>

                <div className="certificates-grid">
                    {filteredCertificates.length > 0 ? (
                        filteredCertificates.map((certificate, index) => (
                            <CertificateCard 
                                key={certificate.id}
                                certificate={certificate}
                                delay={200 + (index * 100)}
                            />
                        ))
                    ) : (
                        <div className="no-certificates">
                            <FaFilter className="no-certificates-icon" />
                            <h3>No certificates found</h3>
                            <p>Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>

                <div className="certificates-stats">
                    <div className="stat-item">
                        <h3>{certificatesData.length}</h3>
                        <p>Total Certificates</p>
                    </div>
                    <div className="stat-item">
                        <h3>{categories.length - 1}</h3>
                        <p>Categories</p>
                    </div>
                    <div className="stat-item">
                        <h3>2022-2023</h3>
                        <p>Achievement Period</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificates;