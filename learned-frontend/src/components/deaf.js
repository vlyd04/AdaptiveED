// import React from 'react';
// import '../App.css';
// import deaf from '../images/blind/deaf.png'
// import text from '../images/blind/deaf1.png'

// function Deaf() {
//     const handleFileUpload = async (file) => {
//         const formData = new FormData();
//         formData.append('file', file);

//         try {
//             const response = await fetch(`http://127.0.0.1:5000/transcribe_text`, {
//                 method: 'POST',
//                 body: formData
//             });
//             if (response.ok) {
//                 const blob = await response.blob();
//                 const url = window.URL.createObjectURL(blob);
//                 const a = document.createElement('a');
//                 a.href = url;
//                 a.download = 'transcription.txt';
//                 a.click();
//                 window.URL.revokeObjectURL(url);
//             } else {
//                 console.error('Error:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const handleTranscriptionClick = () => {
//         const fileInput = document.createElement('input');
//         fileInput.type = 'file';
//         fileInput.accept = '.pdf';
//         fileInput.onchange = (e) => {
//             const file = e.target.files[0];
//             if (file) {
//                 handleFileUpload(file);
//             }
//         };
//         fileInput.click();
//     };

//     return (
//         <div className="deaf-container">
//             <div className='deaf-above'>
//                 <div className='deaf-text'>
//                     <h1> Ignite Your Potential: Skill Development for the Hearing Impaired Community</h1>

//                     <p>Dive into a world of opportunities with our inclusive platform designed for the deaf community. Explore interactive tools, expert resources, and supportive networks to enhance your skills and pursue your passions. Whether it's career advancement or personal growth, we are here to help you achieve greatness with clear communication and unwavering support.</p>
//                 </div>
//                 <img src={deaf} alt="deaf" />

//             </div>

//             <div className='deaf-sec'>
//                 <img src={text} />
//                 <button onClick={handleTranscriptionClick}>Transcribe PDF Text</button></div>
//         </div>
//     );
// }

// export default Deaf;



import React from 'react';
import '../App.css';
import deaf from '../images/blind/deaf.png'
import text from '../images/blind/deaf1.png'

function Deaf() {
    const handleFileUpload = async (file, endpoint) => {
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
                a.download = 'transcription.txt';
                a.click();
                window.URL.revokeObjectURL(url);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleTranscriptionClick = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.pdf';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                handleFileUpload(file, '/transcribe_text');
            }
        };
        fileInput.click();
    };

    const handleAudioTranscriptionClick = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.wav,.mp3';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                handleFileUpload(file, '/audio_to_text');
            }
        };
        fileInput.click();
    };

    return (
        <div className="deaf-container">
            <div className='deaf-above'>
                <div className='deaf-text'>
                    <h1> Ignite Your Potential: Skill Development for the Hearing Impaired Community</h1>

                    <p>Dive into a world of opportunities with our inclusive platform designed for the deaf community. Explore interactive tools, expert resources, and supportive networks to enhance your skills and pursue your passions. Whether it's career advancement or personal growth, we are here to help you achieve greatness with clear communication and unwavering support.</p>
                </div>
                <img src={deaf} alt="deaf" />

            </div>

            <div className='deaf-sec'>
                <img src={text} />
                <button onClick={handleTranscriptionClick}>Transcribe PDF Text</button></div>
        </div>
    );
}

export default Deaf;


