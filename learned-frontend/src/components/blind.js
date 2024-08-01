import React from 'react';
import '../App.css';
import blind from '../images/blind/b2.png';
import braille from '../images/blind/braille.avif'
import audio from '../images/blind/audio.png'

function Blind() {
    const handleFileUpload = async (endpoint, file) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`http://127.0.0.1:5000${endpoint}`, {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = endpoint.includes('braille') ? 'output.txt' : 'output.mp3';
                a.click();
                window.URL.revokeObjectURL(url);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleBrailleClick = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.pdf';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                handleFileUpload('/convert_to_braille', file);
            }
        };
        fileInput.click();
    };

    const handleAudioClick = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.pdf';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                handleFileUpload('/convert_to_audio', file);
            }
        };
        fileInput.click();
    };

    return (
        <>
            <div className="blind-container">
                <div className='blind-above'>
                    <div className='blind-text'>
                        <h1> Empower Your Future: Skill Development for the Visually Impaired</h1>


                        <p>Discover tailored learning experiences designed specifically for the blind and visually impaired. Our platform offers accessible tools, expert guidance, and supportive communities to help you develop new skills and achieve your goals. From tech skills to personal growth, start your journey with confidence and build the future you envision!</p>

                    </div>
                    <img src={blind} alt="deaf" />
                </div>
                <div className='blind-cards'>
                    <div className='blind-sec'>
                        <img src={braille} alt="braille" />
                        <button onClick={handleBrailleClick}>Convert PDF to Braille</button>
                    </div>
                    <div className='blind-sec'>
                        <img src={audio} alt="audio" />
                        <button onClick={handleAudioClick}>Convert PDF to Audio</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blind;


