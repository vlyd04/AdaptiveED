import React from 'react';
import logo from '../images/icon/logo.png';
import search from '../images/icon/search.png';
import menu from '../images/icon/menu.png';
import play from "../images/icon/play.png"
import main from "../images/extra/svg1.jpg"
import '../App.css';


function Header() {
    return (
        <div>
            <header id="header">
                <nav>
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <ul>
                        <li><a className="active" href="#home">Home</a></li>
                        <li><a href="#portfolio_section">Portfolio</a></li>
                        <li><a href="#team_section">Team</a></li>
                        <li><a href="#services_section">Services</a></li>
                        <li><a href="#contactus_section">Contact</a></li>
                    </ul>
                    <div className="srch"><input type="text" className="search" placeholder="Search here..." /><img src={search} alt="search" /></div>
                    <a className="get-started" href="login.html">Get Started</a>
                    <img src={menu} className="menu" alt="menu" />
                </nav>
                <div className="head-container">
                    <div className="quote">
                        <p>When others call it a disability, let us make it our ability!💫</p>
                        <h5>The beautiful thing about learning is that nobody can take it away from you</h5>
                        <div className="play">
                            <img src={play} alt="play" /><span><a href="https://www.youtube.com/watch?v=KFyrgDO1WXk" target="_blank" rel="noopener noreferrer">Watch Now</a></span>
                        </div>
                    </div>
                    <div className="svg-image">
                        <img src={main} alt="svg" />
                    </div>
                </div>
                <div className="side-menu" id="side-menu">
                    <div className="close"><img src="images/icon/close.png" alt="close" /></div>
                    <div className="user">
                        <img src="images/creator/roshan.jpeg" alt="Username" />
                        <p>roshank9419</p>
                    </div>
                    <ul>
                        <li><a href="#about_section">About</a></li>
                        <li><a href="#portfolio_section">Portfolio</a></li>
                        <li><a href="#team_section">Team</a></li>
                        <li><a href="#services_section">Services</a></li>
                        <li><a href="#contactus_section">Contact</a></li>
                        <li><a href="#feedBACK">Feedback</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;
