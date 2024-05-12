import React, { useEffect } from 'react'

function Projects() {
    useEffect(() => {
        document.title = "Portfolio - Projects";
    });
    
    return (
        <div>Projects</div>
    )
}

export default Projects;