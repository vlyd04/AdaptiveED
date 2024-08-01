import React from 'react';
import side from "../images/icon/abt.png"
import "../App.css"

function About() {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <img src={side} alt="about-img" />
            <div className='about-text'>
                <h2>What you think about us ?</h2>
                <p>Our adaptive learning platform enhances the learning for disabled persons with enhanced features, one in case of visually impaired users could upload the text file and convert them to audio files and also to braille displays to ease their way of learning and in the case of deaf they could upload the videos and generate subtitles accordingly. Thus we wanna make them feel one among us and not separated with insecurities.</p>
            </div>
        </div>
    )
}

export default About;
