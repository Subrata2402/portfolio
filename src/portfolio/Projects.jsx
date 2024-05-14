import React, { useEffect } from 'react';
import './Projects.css';
import projects from '../utils/projects';

function Projects() {
    useEffect(() => {
        document.title = "Portfolio - Projects";
    });

    return (
        <div className="projects">
            <h1>Projects</h1>
            <hr className='border'/>
            <div className="projects-container">
                {projects.projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.name} />
                        <div className="project-info">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer">Github</a>
                                <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;