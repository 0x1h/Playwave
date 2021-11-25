import React from 'react'
import Nav from "./Nav"
import GetStarted from "./GetStarted"
import Waves from "../../Assets/Theme/Landing-wave.svg"
import "./scss/style.css"


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
