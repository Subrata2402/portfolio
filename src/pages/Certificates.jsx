import React from 'react'
import { Link } from 'react-router-dom';
import './Certificates.css';
import { FaDownload } from 'react-icons/fa';

function Certificates() {
    return (
        <div className="certificates">
            <h1>Certificates</h1>
            <hr className='border'/>
            <div className="certificates-container">
                <div className="certificate">
                    <img src="certificates/vu-codefest.jpg" alt="certificate1" />
                    <h3>VU Codefest 2023</h3>
                    <p><span>Issued By:</span>Vidyasagar University {"("}Computer Science{")"}</p>
                    <p><span>Issued On:</span>March 23, 2023</p>
                    <a href="/public/certificates/vu-codefest.jpg" download><FaDownload />Download</a>
                </div>
                <div className="certificate">
                    <img src="certificates/java-programming.png" alt="certificate1" />
                    <h3>Java Programming</h3>
                    <p><span>Issued By:</span>Great Learning Academy</p>
                    <p><span>Issued On:</span>February 12, 2023</p>
                    <a href="/public/certificates/java-programming.png" download><FaDownload />Download</a>
                </div>
                <div className="certificate">
                    <img src="certificates/python-fundamentals-for-beginners.png" alt="certificate1" />
                    <h3>Python Fundamentals</h3>
                    <p><span>Issued By:</span>Great Learning Academy</p>
                    <p><span>Issued On:</span>April 23, 2023</p>
                    <a href="/public/certificates/python-fundamentals-for-beginners.png" download><FaDownload />Download</a>
                </div>
                <div className="certificate">
                    <img src="certificates/python-skill-academy.jpg" alt="certificate1" />
                    <h3>Introduction to Python</h3>
                    <p><span>Issued By:</span>Skill Academy</p>
                    <p><span>Issued On:</span>August 20, 2022</p>
                    <a href="/public/certificates/python-skill-academy.jpg" download><FaDownload />Download</a>
                </div>
                <div className="certificate">
                    <img src="certificates/html-tutorial.jpg" alt="certificate1" />
                    <h3>HTML Tutorial</h3>
                    <p><span>Issued By:</span>Skill Academy</p>
                    <p><span>Issued On:</span>September 04, 2022</p>
                    <a href="/public/certificates/html-tutorial.jpg" download><FaDownload />Download</a>
                </div>
                <div className="certificate">
                    <img src="certificates/python-core.png" alt="certificate1" />
                    <h3>Python Core</h3>
                    <p><span>Issued By:</span>Sololearn</p>
                    <p><span>Issued On:</span>September 17, 2022</p>
                    <a href="/public/certificates/python-core.png" download><FaDownload />Download</a>
                </div>
            </div>
        </div>
    )
}

export default Certificates;