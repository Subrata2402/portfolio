import React, { useEffect } from 'react'
import './About.css';

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
                        <img src="profile-logo.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3 className='fw-bold'>Web Developer</h3>
                        <hr className='border' />
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </p>
                    </div>
                </div>

            </div>

            <div className="skills row mt-5">

                <Progress language='Python' progress='70' />
                <Progress language='React.js' progress='60' />
                <Progress language='Mongodb' progress='50' />
                <Progress language='Node.js' progress='60' />
                <Progress language='Express.js' progress='50' />
                <Progress language='Rest API' progress='80' />
                <Progress language='OOPs' progress='60' />
                <Progress language='JavaScript' progress='60' />

            </div>
        </div>
    )
}

export default About;