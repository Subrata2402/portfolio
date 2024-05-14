import React, { useEffect } from 'react'

function Resume() {
    useEffect(() => {
        document.title = "Portfolio - Resume";
    });

    return (
        <iframe src="resume.pdf" frameborder="0" height={842}></iframe>
    )
}

export default Resume;