import React, {useEffect} from 'react'
import Nav from "../Landing/Nav"
import Slogan from "./Slogan"
import Form from "./Form"
import "./scss/style.css"

const Setup = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <Slogan />
                <Form />
            </div>
        </div>
    )
}

export default Setup
