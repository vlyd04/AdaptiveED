import React from 'react';
import star from "../images/icon/star.png";
import rev1 from "../images/creator/review1.jpg";
import rev2 from "../images/creator/review2.jpg";
import rev3 from "../images/creator/review3.jpg";

const reviews = [
    {
        imgSrc: rev1,
        name: "Sophie Daniel",
        type: "Visually impaired",
        review: "Amongst other e-learning platforms I found this adaptive learning platform to enhance my process since I am visually impaired this made my tasks at ease.",
    },
    {
        imgSrc: rev2,
        name: "Clayton Clair",
        type: "Visually impaired",
        review: "I found learning made easy for me and I never feel like I have any disability within me and I am one among others...",
    },
    {
        imgSrc: rev3, // Corrected path
        name: "Devyn Sethi",
        type: "Deaf",
        review: "Learning was an amazing experience for me. I could easily watch videos with subtitles...",
    },
];

const Reviews = () => {
    return (
        <div className="review">
            <div className="diffSection" id="review_section">
                <center>
                    <p style={{ fontSize: '40px', padding: '100px', paddingBottom: '40px', color: '#2E3D49' }}>
                        What the Students Say About Us?
                    </p>
                </center>
            </div>
            <div className="rev-container">
                {reviews.map((review, index) => (
                    <div className="rev-card" key={index}>
                        <div className="identity">
                            <img src={review.imgSrc} alt={review.name} />
                            <p>{review.name}</p>
                            <h6>{review.type}</h6>
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <img src={star} alt="Star" key={i} />
                                ))}
                            </div>
                        </div>
                        <div className="rev-cont">
                            <p id="title">Review:</p>
                            <p id="content">{review.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
