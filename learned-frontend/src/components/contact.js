import React from 'react';

const Contact = () => {
    return (
        <div className="diffSection" id="contactus_section">
            <center>
                <p style={{ fontSize: '50px', padding: '100px' }}>Contact Us</p>
            </center>
            <div className="csec"></div>
            <div className="back-contact">
                <div className="cc">
                    <form action="mailto:roshank9419@gmail.com" method="post" enctype="text/plain">
                        <label>First Name <span className="imp">*</span></label>
                        <label style={{ marginLeft: '185px' }}>Last Name <span className="imp">*</span></label><br />
                        <center>
                            <input type="text" name="" style={{ marginRight: '10px', width: '175px' }} required /><input type="text" name="lname" style={{ width: '175px' }} required /><br />
                        </center>
                        <label>Email <span className="imp">*</span></label><br />
                        <input type="email" name="mail" style={{ width: '100%' }} required /><br />
                        <label>Message <span className="imp">*</span></label><br />
                        <input type="text" name="message" style={{ width: '100%' }} required /><br />
                        <label>Additional Details</label><br />
                        <textarea name="addtional"></textarea><br />
                        <button type="submit" id="csubmit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
