import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer_link">Contact</a>
                    </li>
                </ul>
                <div className="footer_social">
                    <a href="https://www.instagram.com/hhnrye_n/" className="home_social-icon" target="_blank" rel="noreferrer">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/hvnguyen/" className="home_social-icon" target="_blank" rel="noreferrer">
                        <i class="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/hvnguyen57" className="home_social-icon" target="_blank" rel="noreferrer">
                        <i class="uil uil-github"></i>
                    </a>
                </div>

                <span className="footer_copy">&#169; Henry Nguyen. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;