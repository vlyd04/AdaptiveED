import React from 'react';
import sow from "../images/creator/sow1.jpg";
import rosh from "../images/creator/sub.jpg";
import lyd from "../images/creator/lyd1.jpg";
import '../App.css';

function Team() {
    return (
        <div>
            <div className="diffSection" id="team_section">
                <center><p style={{ fontSize: '50px', paddingTop: '100px', paddingBottom: '60px' }}>We're the Creators</p></center>
                <div className="totalcard">
                    <div className="card">
                        <center><img src={sow} alt="Sowmiyaa G V" /></center>
                        <center>
                            <div className="card-title">Sowmiyaa G V</div>
                            <div id="detail">
                                <p>“Helping a person couldn't change the world but it might change the world to that person! “</p>
                                <div className="duty"></div>
                                <a href="https://www.linkedin.com/in/sowmiyaa-g-v/" target="_blank" rel="noopener noreferrer"><button className="btn-sowmiyaagv">Follow +</button></a>
                            </div>
                        </center>
                    </div>
                    <div className="card">
                        <center><img src={rosh} alt="Subhashni R" /></center>
                        <center>
                            <div className="card-title">Subhashni R</div>
                            <div id="detail">
                                <p>“Helping a person couldn't change the world but it might change the world to that person! “</p>
                                <div className="duty"></div>
                                <a href="https://www.linkedin.com/in/subhashni-r-476832216/" target="_blank" rel="noopener noreferrer"><button className="btn-subhashnir">Follow +</button></a>
                            </div>
                        </center>
                    </div>
                    <div className="card">
                        <center><img src={lyd} alt="Subhashni R" /></center>
                        <center>
                            <div className="card-title">Lydia V</div>
                            <div id="detail">
                                <p>“Helping a person couldn't change the world but it might change the world to that person! “</p>
                                <div className="duty"></div>
                                <a href="https://www.linkedin.com/in/lydia-v-85773825b/" target="_blank" rel="noopener noreferrer"><button className="btn-subhashnir">Follow +</button></a>
                            </div>
                        </center>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team;
