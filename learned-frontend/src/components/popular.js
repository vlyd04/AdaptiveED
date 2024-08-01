// import React from 'react';
// import book from "../images/courses/book.png";
// import image from "../images/courses/d1.png";
// import paper from "../images/courses/paper.png";
// import d1 from "../images/courses/d1.png";
// import '../App.css';

// function Learning() {
//     const handleFileUpload = async (endpoint, file) => {
//         const formData = new FormData();
//         formData.append('file', file);

//         try {
//             const response = await fetch(`http://127.0.0.1:5000${endpoint}`, {
//                 method: 'POST',
//                 body: formData
//             });
//             if (response.ok) {
//                 const blob = await response.blob();
//                 const url = window.URL.createObjectURL(blob);
//                 const a = document.createElement('a');
//                 a.href = url;
//                 a.download = endpoint.includes('braille') ? 'output.txt' : 'output.mp3';
//                 a.click();
//                 window.URL.revokeObjectURL(url);
//             } else {
//                 console.error('Error:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const handleBrailleClick = () => {
//         const fileInput = document.createElement('input');
//         fileInput.type = 'file';
//         fileInput.accept = '.pdf';
//         fileInput.onchange = (e) => {
//             const file = e.target.files[0];
//             if (file) {
//                 handleFileUpload('/convert_to_braille', file);
//             }
//         };
//         fileInput.click();
//     };

//     const handleAudioClick = () => {
//         const fileInput = document.createElement('input');
//         fileInput.type = 'file';
//         fileInput.accept = '.pdf';
//         fileInput.onchange = (e) => {
//             const file = e.target.files[0];
//             if (file) {
//                 handleFileUpload('/convert_to_audio', file);
//             }
//         };
//         fileInput.click();
//     };

//     return (
//         <div>
//             <div className="title">
//                 <span>LEARNING MADE EASY</span>
//             </div>
//             <br /><br />
//             <div className="course">
//                 <center>
//                     <div className="cbox">
//                         <div className="det">
//                             <a onClick={handleBrailleClick}><img src={book} alt="book" />Wanna see the world👀[Text to Braille conversion]</a>
//                         </div>
//                         <div className="det">
//                             <a onClick={handleBrailleClick}><img src={book} alt="book" />Wanna see the world👀[Text to audio converion]</a>
//                         </div>
//                         <div className="det">
//                             <a onClick={handleAudioClick}><img src={image} alt="d1" />Wanna hear it out👂[Text Transcriptions]</a>
//                         </div>
//                         <div className="det">
//                             <a href="subjects/jee.html#sample_papers"><img src={paper} alt="paper" />Upcoming features!</a>
//                         </div>
//                     </div>
//                 </center>
//             </div>
//         </div>
//     );
// }

// export default Learning;

// import React from 'react';
// import book from "../images/courses/book.png";
// import image from "../images/courses/d1.png";
// import paper from "../images/courses/paper.png";
// import d1 from "../images/courses/d1.png";
// import '../App.css';

// function Learning() {
//     const handleFileUpload = async (endpoint, file) => {
//         const formData = new FormData();
//         formData.append('file', file);

//         try {
//             const response = await fetch(`http://127.0.0.1:5000${endpoint}`, {
//                 method: 'POST',
//                 body: formData
//             });
//             if (response.ok) {
//                 const blob = await response.blob();
//                 const url = window.URL.createObjectURL(blob);
//                 const a = document.createElement('a');
//                 a.href = url;
//                 a.download = endpoint.includes('braille') ? 'output.txt' : 'output.mp3';
//                 a.click();
//                 window.URL.revokeObjectURL(url);
//             } else {
//                 console.error('Error:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const handleBrailleClick = () => {
//         const fileInput = document.createElement('input');
//         fileInput.type = 'file';
//         fileInput.accept = '.pdf';
//         fileInput.onchange = (e) => {
//             const file = e.target.files[0];
//             if (file) {
//                 handleFileUpload('/convert_to_braille', file);
//             }
//         };
//         fileInput.click();
//     };

//     const handleAudioClick = () => {
//         const fileInput = document.createElement('input');
//         fileInput.type = 'file';
//         fileInput.accept = '.pdf';
//         fileInput.onchange = (e) => {
//             const file = e.target.files[0];
//             if (file) {
//                 handleFileUpload('/convert_to_audio', file);
//             }
//         };
//         fileInput.click();
//     };

//     return (
//         <div className="learning-container">
//             <header className="header">
//                 <h1>LEARNING MADE EASY</h1>
//             </header>
//             <section className="course-section">
//                 <div className="course-box">
//                     <div className="course-option">
//                         <a onClick={handleBrailleClick}><img src={book} alt="book" />Wanna see the world👀[Text to Braille conversion]</a>
//                     </div>
//                     <div className="course-option">
//                         <a onClick={handleAudioClick}><img src={image} alt="d1" />Wanna see the world👀[Text to audio converion]</a>
//                     </div>
//                     <div className="course-option">
//                         <img src={image} alt="d1" />Wanna hear it out👂[Text Transcriptions]
//                     </div>
//                 </div>
//                 <div className="additional-options">
//                     <div className="course-option">
//                         <img src={paper} alt="Upcoming features" />
//                         <span>Upcoming features!</span>
//                     </div>
//                     <div className="course-option">
//                         <img src={d1} alt="User reviews" />
//                         <span>User reviews</span>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Learning;

import React from 'react';
import { Link } from 'react-router-dom';

function Popular() {
    return (
        <div className='learn-container'>
            <h1>Explore Now</h1>
            <div className='learn-section'>
                <Link to="/blind">
                    <p>Wanna See the world👀</p>
                </Link>
            </div>
            <div className='learn-section'>
                <Link to="/deaf">
                    <p>Wanna Hear it out👂</p>
                </Link>
            </div>
        </div>
    );
}

export default Popular;
