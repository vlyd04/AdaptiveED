import React from 'react';
import computer from "../images/icon/computer-courses.png";
import brain from "../images/icon/brainbooster.png";
import online from "../images/icon/online-tutorials.png";
import paper from "../images/icon/papers.jpg";
import discussion from "../images/icon/discussion.png"
import quiz from "../images/icon/q1.png"
import help from "../images/icon/help.png"


const Services = () => {
    return (
        <div className="service-swipe">
            <div className="diffSection" id="services_section">
                <center>
                    <p style={{ fontSize: '50px', padding: '100px', paddingBottom: '40px', color: '#fff' }}>Services</p>
                </center>
            </div>
            <a href="subjects/computer_courses.html">
                <div className="s-card">
                    <img src={computer} alt="Computer Courses" />
                    <p>Converting Text to audio files</p>
                </div>
            </a>
            <a href="subjects/jee.html">
                <div className="s-card">
                    <img src={brain} alt="Brain Booster" />
                    <p>Converting text to braille displays</p>
                </div>
            </a>
            <a href="#">
                <div className="s-card">
                    <img src={online} alt="Online Tutorials" />
                    <p>Producing video with subtitles</p>
                </div>
            </a>
            <a href="subjects/jee.html#sample_papers">
                <div className="s-card">
                    <img src={paper} alt="Papers" />
                    <p>Success stories</p>
                </div>
            </a>
            <a href="#contactus_section">
                <div className="s-card">
                    <img src={discussion} alt="Discussion" />
                    <p>Discussion with Our Tutors & Mentors</p>
                </div>
            </a>
            <a href="subjects/quiz.html">
                <div className="s-card">
                    <img src={quiz} alt="Quiz" />
                    <p>Feed back forum</p>
                </div>
            </a>
            <a href="#contactus_section">
                <div className="s-card">
                    <img src={help} alt="Help" />
                    <p>24x7 Online Support</p>
                </div>
            </a>
        </div>
    );
}

export default Services;
