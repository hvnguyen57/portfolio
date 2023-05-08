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
                        <i className='portfolio_icon'><i class='bx bxl-react'></i><i class='bx bxl-nodejs'></i></i>
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
                        <i className='uil uil portfolio_icon'><i class='bx bxl-react'></i><i class='bx bxl-firebase'></i><i class='bx bxl-flask'></i></i>
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
            </div>
        </section>

    )
}

export default Portfolio;