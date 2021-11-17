import React from 'react'
import logo from "../../Assets/Logo/Logo.png"
import {Link} from "react-router-dom"

function Nav() {
    return (
        <nav>
            <div className="nav-stuff">
                <div className="main-components">
                    <div className="logo-box">
                        <img src={logo} alt="" />
                    </div>
                    <div className="Name" style={{color: "#0BFF9F", fontWeight: 600}}>PlayWave</div>
                </div>
                <div className="direct-links">
                    <Link to="/Welcome">Source</Link>
                    <Link to="/Welcome">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
 