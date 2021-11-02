import React, {useEffect} from 'react'
import Nav from "../Landing/Nav"
import Slogan from "./Slogan"
import Form from "./Form"
import "./scss/style.css"

interface SetupProp {
    code?: string | null
}

const Setup: React.FC<SetupProp> = ({code}) => {

    useEffect(() => {
        localStorage.setItem("AuthCode", code!)
    }, [code])

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
