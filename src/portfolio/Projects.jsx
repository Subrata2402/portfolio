import React, { useEffect, useState } from 'react';
import './Projects.css';
import projects from '../utils/projects';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaFilter } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';

function ProjectCard({ project, delay }) {
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`project-card ${isVisible ? 'fade-up' : ''}`}>
            <div className="project-image-container">
                <img 
                    src={project.image} 
                    alt={project.name}
                    onLoad={() => setImageLoaded(true)}
                    className={imageLoaded ? 'loaded' : ''}
                />
                <div className="project-overlay">
                    <a 
                        href={project.live || project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="overlay-link"
                    >
                        <div className="overlay-content">
                            <FaEye className="view-icon" />
                            <span>View Project</span>
                        </div>
                    </a>
                </div>
            </div>
            
            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-title">{project.name}</h3>
                    <div className="project-id">#{project.id.toString().padStart(2, '0')}</div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                    <span className="tech-badge">React</span>
                    <span className="tech-badge">Node.js</span>
                    <span className="tech-badge">MongoDB</span>
                </div>
                
                <div className="project-actions">
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="project-btn github-btn"
                    >
                        <FaGithub />
                        <span>Source Code</span>
                    </a>
                    {project.live && (
                        <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noreferrer"
                            className="project-btn live-btn"
                        >
                            <FaExternalLinkAlt />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function Projects() {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects.projects);

    useEffect(() => {
        document.title = "Portfolio - Projects";
        
        const timer = setTimeout(() => {
            setHeaderVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const filtered = projects.projects.filter(project =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(filtered);
    }, [searchTerm]);

    return (
        <div className="projects-page">
            <div className="projects-background">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
            </div>

            <div className="projects-container">
                <div className={`projects-header ${headerVisible ? 'fade-in' : ''}`}>
                    <div className="header-content">
                        <span className="section-badge">
                            <FaCode />
                            Portfolio
                        </span>
                        <h1 className="main-title">My Projects</h1>
                        <p className="subtitle">
                            Showcasing my journey through code - from concept to creation
                        </p>
                    </div>
                </div>

                <div className="projects-filters">
                    <div className="search-container">
                        <BiSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    
                    <div className="projects-count">
                        <span>{filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''}</span>
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <ProjectCard 
                                key={project.id}
                                project={project}
                                delay={200 + (index * 100)}
                            />
                        ))
                    ) : (
                        <div className="no-projects">
                            <FaFilter className="no-projects-icon" />
                            <h3>No projects found</h3>
                            <p>Try adjusting your search terms</p>
                        </div>
                    )}
                </div>

                <div className="projects-footer">
                    <div className="footer-content">
                        <h3>Interested in collaborating?</h3>
                        <p>Let's build something amazing together!</p>
                        <a href="/contact" className="cta-button">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;