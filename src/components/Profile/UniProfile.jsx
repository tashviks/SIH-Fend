import React from 'react';
import user from '../../assets/user.png';
import "../../css/profile.css";
export default function UserProfile(){
return(
<>
    <div className="wrapper">
        <div className="left">
            <img src={user} alt="user" width="100"/>
            <h4>Lovely Professional University</h4>
            {/* <p>UI Developer</p> */}
            <a href="/">Register Students</a>
        </div>
        <div className="right">
            <div className="info">
                <h3>Information</h3>
                <div className="info_data">
                    <div className="data">
                        <h4>Email</h4>
                        <p>lpu@gmail.com</p>
                    </div>
                    <div className="data">
                        <h4>Phone</h4>
                        <p>0151 2255 3355</p>
                    </div>
                </div>
            </div>
            
            <div className="projects">
                <h3>Projects</h3>
                <div className="projects_data">
                    <div className="scrollable">
                        <p>Projects Will be displayed here.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
    )
}