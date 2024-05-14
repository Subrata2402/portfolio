import React, { useEffect } from 'react'
import './Contact.css';
import { SlLocationPin } from 'react-icons/sl';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLogoDiscord, IoShareSocialOutline } from 'react-icons/io5';
import { FaSquareXTwitter } from 'react-icons/fa6';

function Contact() {
    useEffect(() => {
        document.title = "Portfolio - Contact";
    });
    
    return (
        <div className="contact">
            <div className="contact-title">
                <h1 className='text-center fw-bold'>Contact Me</h1>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <div className="crd">
                    <SlLocationPin className='fs-2' />
                    <div className="details">
                        <h4>My Address</h4>
                        <p>Midnapore, West Bengal, 721101</p>
                    </div>
                </div>
                <div className="crd">
                    <IoShareSocialOutline className='fs-2' />

                    <div className="socials">
                        <h4>Social Profiles</h4>
                        <div className="social-profiles">
                            <a href="https://www.github.com/Subrata2402" target="_blank" rel="noreferrer">
                                <FaGithubSquare />
                            </a>
                            <a href="https://www.linkedin.com/in/subrata-das-867903243" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.facebook.com/subrata3250" target="_blank" rel="noreferrer">
                                <FaFacebookSquare />
                            </a>
                            <a href="https://discord.com/channels/@me/660337342032248832" target="_blank" rel="noreferrer">
                                <IoLogoDiscord />
                            </a>
                            <a href="https://twitter.com/Subrata3250" target="_blank" rel="noreferrer">
                                <FaSquareXTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="crd">
                    <GoMail className='fs-2' />
                    <div className="details">
                        <h4>Email Me</h4>
                        <p><a href="mailto:subratadas3250@gmail.com">subratadas3250@gmail.com</a></p>
                    </div>
                </div>
                <div className="crd">
                    <FiPhoneCall className='fs-2' />
                    <div className="details">
                        <h4>Call Me</h4>
                        <p><a href="tel:+919674026884">+91 9674026884</a></p>
                    </div>
                </div>
            </div>
            <form action="" className="contact-form row m-0 mt-3">
                <div className='col-md-6'>
                    <input type="text" placeholder='Enter Your Name...' className='mb-3' />
                    <input type="email" placeholder='Enter Your Email...' className='mb-3' />
                    <input type="text" placeholder='Enter Subject...' className='mb-3' />
                </div>
                <div className='col-md-6 mb-3'>
                    <textarea name="" id="" rows={6} placeholder='Enter Your Message...'></textarea>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                    <button className='btn btn-primary px-4'>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;