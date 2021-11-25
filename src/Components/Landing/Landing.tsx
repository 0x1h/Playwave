import React from 'react'
import "./scss/style.css"
import Nav from "./Nav"
import GetStarted from "./GetStarted"
import Waves from "../../Assets/Theme/Landing-wave.svg"


function Landing() {
    return (
        <React.Fragment>
            <img src={Waves} alt="" className="Waves"/>
            <Nav />
            <GetStarted />
        </React.Fragment>
    )
}

export default Landing
