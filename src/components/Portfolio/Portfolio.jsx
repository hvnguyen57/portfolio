import React, {useState}from "react";
import "./portfolio.css";

const Portfolio = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <div className="section_sub">
                <span>A showcase of my completed projects</span>
            </div>

            <div className="portfolio_container container grid">
                {/* Portfolio Website Section */}
                <div className='portfolio_content'>
                    <div>
                        <i className='portfolio_icon'><i class='bx bxl-react'></i><i class='bx bxl-javascript' ></i><i class='bx bxl-nodejs'></i></i>
                        <h3 className="project_title">Portfolio Website</h3>
                    </div>

                    <span className="portfolio_button" onClick={() => toggleTab(0)}>View More<i className="uil uil-arrow-right portfolio_button-icon"></i></span>

                    <div className={toggleState === 0 ? "portfolio_modal active_modal" : "portfolio_modal"}>
                        <div className="portfolio_modal-content">
                            <i onClick={() => toggleTab(false)} className="uil uil-times portfolio_modal-close"></i>
                            
                            <h3 className="portfolio_modal-title">Personal Project</h3>
                            <p className="portfolio_modal-desc">My personal portfolio website</p>

                            <ul className="portfolio_modal-portfolio grid">  
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> Built using React.js & Node.js</p>
                                </li>

                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><a href="https://github.com/hvnguyen57/portfolio" className="project_link" target="_blank" rel="noreferrer"><i className="uil uil-check-circle portfolio_modal-icon"></i> GitHub Link</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* InterviewPrep.AI */}
                <div className='portfolio_content'> 
                    <div>
                        <i className='uil uil portfolio_icon'><i class='bx bxl-react'><i class='bx bxl-javascript' ></i></i><i class='bx bxl-firebase'></i><i class='bx bxl-flask'></i></i>
                        <h3 className="project_title">InterviewPrep.AI</h3>
                    </div>

                    <span className="portfolio_button" onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right portfolio_button-icon"></i></span>

                    <div className={toggleState === 1 ? "portfolio_modal active_modal" : "portfolio_modal"}>
                        <div className="portfolio_modal-content">
                            <i onClick={() => toggleTab(false)} className="uil uil-times portfolio_modal-close"></i>

                            <h3 className="portfolio_modal-title">Frontend Developer</h3>
                            <p className="portfolio_modal-desc">Helped implement frontend UI</p>

                            <ul className="portfolio_modal-portfolio grid">
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> An AI-based behavioral interview preparation service</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> Developed during LA Hacks 2023</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> Built using React.js, Flask (Python), Firebase, & OpenAI API</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><a href="https://github.com/hvnguyen57/lahackathon2023" className="project_link" target="_blank" rel="noreferrer"><i className="uil uil-check-circle portfolio_modal-icon"></i> GitHub Link</a></p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><a href="https://devpost.com/software/interviewprep-ai" className="project_link" target="_blank" rel="noreferrer"><i className="uil uil-check-circle portfolio_modal-icon"></i> Devpost Link</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Swim Timer */}
                <div className='portfolio_content'>
                    <div>
                        <i className='uil uil portfolio_icon'><i class='bx bxl-flutter'></i><i class='bx bxl-firebase'></i></i>
                        <h3 className="project_title">Elapsed: A Swim Timer App</h3>
                    </div>

                    <span className="portfolio_button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right portfolio_button-icon"></i></span>

                    <div className={toggleState === 2 ? "portfolio_modal active_modal" : "portfolio_modal"}>
                        <div className="portfolio_modal-content">
                            <i onClick={() => toggleTab(false)} className="uil uil-times portfolio_modal-close"></i>

                            <h3 className="portfolio_modal-title">Frontend Developer</h3>
                            <p className="portfolio_modal-desc">Helped design and implement frontend UI</p>

                            <ul className="portfolio_modal-portfolio grid">
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> A swim timer app used to time multiple swimmers at once</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> Built using Flutter & Firebase</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info">
                                        <a href="https://github.com/hvnguyen57/swim_timer" className="project_link" target="_blank" rel="noreferrer"><i className="uil uil-check-circle portfolio_modal-icon"></i> GitHub Link</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Frody */}
                <div className='portfolio_content'>
                    <div>
                        <i className='uil uil portfolio_icon'><i class='bx bxl-google-cloud'></i><i class='bx bxl-react'></i><i class='bx bxl-typescript'></i><i class='bx bxl-spring-boot'></i><i class='bx bxl-firebase'></i></i>
                        <h3 className="project_title">Frody: A Credit Card Detection Service</h3>
                    </div>

                    <span className="portfolio_button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right portfolio_button-icon"></i></span>

                    <div className={toggleState === 3 ? "portfolio_modal active_modal" : "portfolio_modal"}>
                        <div className="portfolio_modal-content">
                            <i onClick={() => toggleTab(false)} className="uil uil-times portfolio_modal-close"></i>

                            <h3 className="portfolio_modal-title">Frontend/API Integration</h3>
                            <p className="portfolio_modal-desc">Helped developed frontend and intergrated APIs</p>

                            <ul className="portfolio_modal-portfolio grid">
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> A credit card fraud detection service that helps users detect potential fraudulent activity</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> Developed during PennApps XXIV</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> Built using Google Cloud Platform (GCP), React.ts, Spring Boot, Firebase, & Twilio</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info">
                                        <a href="https://github.com/orgs/PennApps-XXIV-Team/repositories" className="project_link" target="_blank" rel="noreferrer"><i className="uil uil-check-circle portfolio_modal-icon"></i> GitHub Link</a>
                                    </p>
                                </li>
                                <li class="portfolio_modal-project">
                                    <p class="portfolio_modal-info">
                                        <a href="https://devpost.com/software/temptemp" class="project_link" target="_blank" rel="noreferrer">
                                            <i class="uil uil-check-circle portfolio_modal-icon"></i> Devpost Link
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* CodeFlow */}
                <div className='portfolio_content'>
                    <div>
                        <i className='uil uil portfolio_icon'><i class='bx bxl-react'></i><i class='bx bxl-flask'></i><i class='bx bxl-python'></i><i class='bx bxl-mongodb'></i></i>
                        <h3 className="project_title">CodeFlow</h3>
                    </div>

                    <span className="portfolio_button" onClick={() => toggleTab(4)}>View More<i className="uil uil-arrow-right portfolio_button-icon"></i></span>

                    <div className={toggleState === 4 ? "portfolio_modal active_modal" : "portfolio_modal"}>
                        <div className="portfolio_modal-content">
                            <i onClick={() => toggleTab(false)} className="uil uil-times portfolio_modal-close"></i>

                            <h3 className="portfolio_modal-title">Frontend/API Integration</h3>
                            <p className="portfolio_modal-desc">Helped developed frontend and intergrated APIs</p>

                            <ul className="portfolio_modal-portfolio grid">
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> A web application to help new developers onboarding to a new codebase</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> Developed during Hack the North 2023</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> Built using React.js, Flask, MongoDB, Cohere, & Pyvis</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info">
                                        <a href="https://github.com/hvnguyen57/HackTheNorth" className="project_link" target="_blank" rel="noreferrer"><i className="uil uil-check-circle portfolio_modal-icon"></i> GitHub Link</a>
                                    </p>
                                </li>
                                <li class="portfolio_modal-project">
                                    <p class="portfolio_modal-info">
                                        <a href="https://devpost.com/software/code-flow" class="project_link" target="_blank" rel="noreferrer">
                                            <i class="uil uil-check-circle portfolio_modal-icon"></i> Devpost Link
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* SolarUp */}
                <div className='portfolio_content'>
                    <div>
                        <i className='uil uil portfolio_icon'><i class='bx bxl-react'></i><i class='bx bxl-tailwind-css'></i><i class='bx bxl-graphql'></i></i>
                        <h3 className="project_title">SolarUp</h3>
                    </div>

                    <span className="portfolio_button" onClick={() => toggleTab(5)}>View More<i className="uil uil-arrow-right portfolio_button-icon"></i></span>

                    <div className={toggleState === 5 ? "portfolio_modal active_modal" : "portfolio_modal"}>
                        <div className="portfolio_modal-content">
                            <i onClick={() => toggleTab(false)} className="uil uil-times portfolio_modal-close"></i>

                            <h3 className="portfolio_modal-title">Frontend Developer</h3>
                            <p className="portfolio_modal-desc">Helped design and implement frontend UI</p>

                            <ul className="portfolio_modal-portfolio grid">
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> A web application to help companies and parking lot owners determine the economic viability of installing solar panel roofs on their parking lots</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> Developed during HackHarvard 2023</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info"><i className="uil uil-check-circle portfolio_modal-icon"></i> Built using React.js, MaterialUI, FastAPI, GraphQL, Next,js, Selenium, & Mapbox API</p>
                                </li>
                                <li className="porfolio_modal-project">
                                    <p className="portfolio_modal-info">
                                        <a href="https://github.com/hvnguyen57/hackharvard" className="project_link" target="_blank" rel="noreferrer"><i className="uil uil-check-circle portfolio_modal-icon"></i> GitHub Link</a>
                                    </p>
                                </li>
                                <li class="portfolio_modal-project">
                                    <p class="portfolio_modal-info">
                                        <a href="https://devpost.com/software/solarup-i36o2a" class="project_link" target="_blank" rel="noreferrer">
                                            <i class="uil uil-check-circle portfolio_modal-icon"></i> Devpost Link
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Portfolio;