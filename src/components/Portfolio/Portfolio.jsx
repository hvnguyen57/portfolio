import React from "react";
import "./portfolio.css";

const Portfolio = () => {
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
                        <i className='uil uil-arrow portfolio_icon'><i class='bx bxl-react'></i><i class='bx bxl-nodejs'></i></i>
                        <h3 className="project_title">Portfolio Website</h3>
                    </div>

                    <span className="portfolio_button">View More<i className="uil uil-arrow-right portfolio_button-icon"></i></span>

                    <div className="portfolio_model">
                        <div className="portfolio_model-content">
                            <i className="uil uil-times portfolio_model-close"></i>
                            
                            <h3 className="portfolio_model-title">Personal Project</h3>
                            <p className="portfolio_model-desc">My personal portfolio website</p>

                            <ul className="portfolio_model-portfolio grid">
                                <li className="porfolio_model-project">
                                    <i className="uil uil-check-circle portfolio_model-icon"></i>
                                    <p className="portfolio_model-info">Built using React.js</p>
                                </li>
                            </ul>

                            <ul className="portfolio_model-portfolio grid">
                                <li className="porfolio_model-project">
                                    <i className="uil uil-check-circle portfolio_model-icon"></i>
                                    <p className="portfolio_model-info"><a href="https://github.com/hvnguyen57/portfolio" className="project_link" target="_blank" rel="noreferrer">GitHub Link</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Course Schedule App */}
                <div className='portfolio_content'>
                    <div>
                        <i className='uil uil portfolio_icon'><i class='bx bxl-flutter'></i><i class='bx bxl-firebase'></i></i>
                        <h3 className="project_title">Course Schedule Network App</h3>
                    </div>

                    <span className="portfolio_button">View More<i className="uil uil-arrow-right portfolio_button-icon"></i></span>

                    <div className="portfolio_model">
                        <div className="portfolio_model-content">
                            <i className="uil uil-times portfolio_model-close"></i>

                            <h3 className="portfolio_model-title">Backend Developmer</h3>
                            <p className="portfolio_model-desc">A team project where I helped implement backend infrastructure</p>

                            <ul className="portfolio_model-portfolio grid">
                                <li className="porfolio_model-project">
                                    <i className="uil uil-check-circle portfolio_model-icon"></i>
                                    <p className="portfolio_model-info">Built using Flutter</p>
                                </li>
                            </ul>

                            <ul className="portfolio_model-portfolio grid">
                                <li className="porfolio_model-project">
                                    <i className="uil uil-check-circle portfolio_model-icon"></i>
                                    <p className="portfolio_model-info"><a href="https://github.com/pfranz1/Team-One-Project" className="project_link" target="_blank" rel="noreferrer">GitHub Link</a></p>
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

                    <span className="portfolio_button">View More<i className="uil uil-arrow-right portfolio_button-icon"></i></span>

                    <div className="portfolio_model">
                        <div className="portfolio_model-content">
                            <i className="uil uil-times portfolio_model-close"></i>

                            <h3 className="portfolio_model-title">Frontend Developer</h3>
                            <p className="portfolio_model-desc">A swim timer app where I helped design and implement frontend UI</p>

                            <ul className="portfolio_model-portfolio grid">
                                <li className="porfolio_model-project">
                                    <i className="uil uil-check-circle portfolio_model-icon"></i>
                                    <p className="portfolio_model-info">Built using Flutter</p>
                                </li>
                            </ul>

                            <ul className="portfolio_model-portfolio grid">
                                <li className="porfolio_model-project">
                                    <i className="uil uil-check-circle portfolio_model-icon"></i>
                                    <p className="portfolio_model-info">
                                        <a href="https://github.com/hvnguyen57/swim_timer" className="project_link" target="_blank" rel="noreferrer">GitHub Link</a>
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