import React from 'react';

const Feedback = () => {
    return (
        <div className="feedback-section">
            <div className="title2" id="feedBACK">
                <span>Give Feedback</span>
                <div className="shortdesc2">
                    <p>Please share your valuable feedback with us</p>
                </div>
            </div>
            <div className="feedbox">
                <div className="feed">
                    <form action="mailto:sowmiyaagv11@gmail.com" method="post" enctype="text/plain">
                        <label>Your Name</label><br />
                        <input type="text" name="" className="fname" required /><br />
                        <label>Email</label><br />
                        <input type="email" name="mail" required /><br />
                        <label>Additional Details</label><br />
                        <textarea name="addtional"></textarea><br />
                        <button type="submit" id="csubmit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
