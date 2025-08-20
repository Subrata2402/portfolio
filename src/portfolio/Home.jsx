import React, { useEffect } from 'react'
import './Home.css';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { RxDiscordLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';
import { RiUserSearchFill } from 'react-icons/ri';
import { GrDocumentText } from 'react-icons/gr';

function Home() {
    useEffect(() => {
        document.title = "Portfolio - Home";
    });

    return (
        <div className="home-section flex-wrap-reverse">
            <div className="col-md-6 m-0 p-0">
                <div className="home-title">
                    <h1>Hi, I'm <span>Subrata Das</span></h1>
                    <h3 className='text-info'>Web & App Developer</h3>
                </div>
                <div className="home-description">
                    <p>
                        I am a web developer. I have been developing web for 2 years. I have developed many web projects. I have a good knowledge of web development. I have developed many projects using Python, React.js, Mongodb, Node.js, Express.js, Rest API, JavaScript, etc.
                    </p>

                    <div className="home-buttons">
                        <div className="home-btn">
                            <a href="mailto:subratadas3250@gmail.com"><RiUserSearchFill />Hire Me</a>
                        </div>
                        <div className="home-btn">
                            <a href="public/resume.pdf" target="_blank" rel="noreferrer" download><GrDocumentText />Download Resume</a>
                        </div>
                    </div>
                    <div className="home-social">
                        <a href="https://www.github.com/Subrata2402" target="_blank" rel="noreferrer">
                            <FiGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/subrata-das-867903243" target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.facebook.com/subrata3250" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://discord.com/channels/@me/660337342032248832" target="_blank" rel="noreferrer">
                            <RxDiscordLogo />
                        </a>
                        <a href="https://twitter.com/Subrata3250" target="_blank" rel="noreferrer">
                            <BsTwitterX />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 profile-logo">
                <img src="avatarlogo.png" alt="profile" className='p-4' />
            </div>
        </div>
    )
}

export default Home;