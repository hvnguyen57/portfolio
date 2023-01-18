import React from "react";

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <div className="section_sub">
                <span>A showcase of my completed projects</span>
            </div>

            <div className="portfolio_container container grid">
                <div className='portfolio_content'>
                    <div>
                        <i className='uil uil portfolio_icon'></i>
                        <h3 className="project_title">Portfolio Website</h3>
                    </div>

                    <span className="services_button">View More<i className="uil uil-arrow-right portfolio_button-icon"></i></span>

                    <div className="portfolio_model">
                        <div className="portfolio_model-content">
                            <i className="uil uil-times portfolio_model-close"></i>

                            <h3 className="portfolio_model-title">something</h3>
                            <p className="portfolio_model-desc">My personal portfolio website built using React.js</p>

                            <ul className="portfolio_model-portfolio grid">
                                <li className="porfolio_model-project">
                                    <i className="uil uil-check-circle portfolio_model-icon"></i>
                                    <p className="portfolio_model-info">something</p>
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