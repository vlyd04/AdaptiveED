import React from 'react'
import '../App.css';

function Portfolio() {
    return (
        <div>
            <div className="diffSection" id="portfolio_section">
                <center><p style={{ fontSize: '50px', padding: '100px', paddingBottom: '40px' }}>Portfolio</p></center>
                <div className="content">
                    <p>
                        “The word POSITIVITY has 10 letters, so does NEGATIVITY, word JOY has 3 letters so does the word SAD, word FRIENDS has 7 letters, so does ENEMIES so LIFE always has 2 sides and it lays on our hands to choose the best sip of tea and enjoy it☕”
                    </p>
                </div>
                <div className="extra">
                    <p>We're increasing this data every year</p>
                    <div className="smbox">
                        <span><center><div className="data">154</div><div className="det">Enrolled Students</div></center></span>
                        <span><center><div className="data">5</div><div className="det">Total Features</div></center></span>
                        <span><center><div className="data">2</div><div className="det">Upcoming features</div></center></span>
                        <span><center><div className="data">30</div><div className="det">Success stories</div></center></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
