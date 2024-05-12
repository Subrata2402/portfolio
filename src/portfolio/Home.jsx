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
                    <h3 className='text-info'>Web Developer</h3>
                </div>
                <div className="home-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas ultricies vel ac nunc. Nullam nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec nunc ultricies ultricies.</p>

                    <div className="home-buttons">
                        <div className="home-btn">
                            <a href="mailto:subratadas3250@gmail.com"><RiUserSearchFill />Hire Me</a>
                        </div>
                        <div className="home-btn">
                            <a href="https://www.github.com/Subrata2402" target="_blank" rel="noreferrer"><GrDocumentText />Download Resume</a>
                        </div>
                    </div>
                    <div className="home-social">
                        <a href="https://www.github.com/Subrata2402" target="_blank" rel="noreferrer">
                            <FiGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/subrata-das-867903243" target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <RxDiscordLogo />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <BsTwitterX />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 profile-logo">
                <img src="profile-logo.jpg" alt="profile" className='p-4' />
            </div>
        </div>
    )
}

export default Home;