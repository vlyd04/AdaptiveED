import React from 'react';
import fb from "../images/icon/fb.png";
import insta from "../images/icon/insta.png";
import tt from "../images/icon/tt.png"
import ytube from "../images/icon/ytube.png";
import linkedin from "../images/icon/linkedin.png";
import logo from "../images/icon/logo - Copy.png";
import location from "../images/icon/location.png";
import phone from "../images/icon/phone.png";
import email from "../images/icon/mail.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="left-col">
                    <img src={logo} alt="Logo" style={{ width: '200px' }} />
                    <div className="social-media">
                        <a href="#"><img src={fb} alt="Facebook" /></a>
                        <a href="#"><img src={insta} alt="Instagram" /></a>
                        <a href="#"><img src={tt} alt="Twitter" /></a>
                        <a href="#"><img src={ytube} alt="YouTube" /></a>
                        <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
                    </div>
                    <br /><br />
                    <p className="rights-text">Copyright © 2021 Created By Sowmiyaa G V, Subhashni R, Lydia. All Rights Reserved.</p>
                    <br />
                    <p><img src={location} alt="Location" />Chennai Institute of Technology<br />Chennai 600063</p>
                    <br />
                    <p><img src={phone} alt="Phone" /> +91 9444225836<br />
                        <img src={email} alt="Email" /> sowmiyaagv11@gmail.com</p>
                </div>
                <div className="right-col">
                    <h1 style={{ color: '#fff' }}>Our Newsletter</h1>
                    <div className="border"></div>
                    <br />
                    <p>Enter Your Email to get our News and updates.</p>
                    <form className="newsletter-form">
                        <input className="txtb" type="email" placeholder="Enter Your Email" />
                        <input className="btn" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
