import React from 'react'
import logo from "../../Assets/Logo/Logo.png"
import {Link, useHistory} from "react-router-dom"

function Nav() {
    let history = useHistory()

    return (
        <nav>
            <div className="nav-stuff">
                <div className="main-components" style={{cursor: "pointer"}} onClick={() => history.push("/Welcome")}>
                    <div className="logo-box">
                        <img src={logo} alt="" />
                    </div>
                    <div className="Name" style={{color: "#0BFF9F", fontWeight: 600}}>PlayWave</div>
                </div>
                <div className="direct-links">
                    <button className="about-btn" onClick={() => history.push("/About")}>About</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav
 