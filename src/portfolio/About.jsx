import React, { useEffect } from 'react'
import './About.css';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { BsGlobe, BsPersonWorkspace } from 'react-icons/bs';
import { MdMailOutline, MdOutlinePhoneAndroid } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import { GiGraduateCap } from 'react-icons/gi';
import { FaRegUser } from 'react-icons/fa';

function Progress(props) {
    return (
        <div className="col-md-6">
            <span>{props.language} - {props.progress}%</span>
            <div
                class="progress mt-2 mb-4"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={props.progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{backgroundColor: "lightskyblue"}}
            >
                <div class="progress-bar" style={{ width: `${props.progress}%` }}></div>
            </div>
        </div>
    )
}

function About() {
    useEffect(() => {
        document.title = "Portfolio - About";
        // animation progress bar
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach((progressBar) => {
            progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
        });
    });

    return (
        <div className='about'>
            <div className="about-me">

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="avatarlogo.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3 className='fw-bold'>Web & App Developer</h3>
                        <hr className='border' />
                        <p className="fst-italic">
                            I am a web and app developer. I have been developing web and app for 2 years. I have developed many web and app projects. I have a good knowledge of web and app development. I have developed many projects using Python, React.js, Mongodb, Node.js, Express.js, Rest API, Flutter, JavaScript, etc.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><IoCalendarNumberOutline /> <strong>Birthday:</strong> <span>February 24, 2001</span></li>
                                    <li><BsGlobe /> <strong>Website:</strong> <span>{window.location.origin}</span></li>
                                    <li><MdOutlinePhoneAndroid /> <strong>Phone:</strong> <span>+91 9749844740</span></li>
                                    <li><SlLocationPin /> <strong>Address:</strong> <span>West Bengal, India, 721101</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><FaRegUser /> <strong>Age:</strong> <span>23</span></li>
                                    <li><GiGraduateCap /> <strong>Degree:</strong> <span>Master</span></li>
                                    <li><MdMailOutline /> <strong>Email:</strong> <span>subratadas3250@gmail.com</span></li>
                                    <li><BsPersonWorkspace /> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="skills row mt-5">

                <Progress language='Python' progress='70' />
                <Progress language='React.js' progress='60' />
                <Progress language='Mongodb' progress='70' />
                <Progress language='Node.js' progress='60' />
                <Progress language='Express.js' progress='50' />
                <Progress language='Rest API' progress='60' />
                <Progress language='Flutter' progress='40' />
                <Progress language='JavaScript' progress='80' />

            </div>
        </div>
    )
}

export default About;