import React, { useEffect } from 'react';
import './Projects.css';

function Projects() {
    useEffect(() => {
        document.title = "Portfolio - Projects";
    });

    return (
        <div className="project">
            <div className="project-card">
                <img src="profile.jpg" alt="profile" />
                <div className="project-info">
                    <h3>Project Name</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="project-links">
                        <a href="https://www.github.com/Subrata2402" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://www.github.com/Subrata2402" target="_blank" rel="noreferrer">Live</a>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src="profile.jpg" alt="profile" />
                <div className="project-info">
                    <h3>Project Name</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="project-links">
                        <a href="https://www.github.com/Subrata2402" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://www.github.com/Subrata2402" target="_blank" rel="noreferrer">Live</a>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src="profile.jpg" alt="profile" />
                <div className="project-info">
                    <h3>Project Name</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="project-links">
                        <a href="https://www.github.com/Subrata2402" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://www.github.com/Subrata2402" target="_blank" rel="noreferrer">Live</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;