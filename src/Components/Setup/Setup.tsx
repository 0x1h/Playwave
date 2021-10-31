import React, {useState, useEffect} from 'react'
import Nav from "../Landing/Nav"
import Slogan from "./Slogan"
import Form from "./Form"
import "./scss/style.css"

interface SetupProp {
    code?: string | null
}

const Setup: React.FC<SetupProp> = ({code}) => {
    const [auth, _] = useState(code)
    console.log(auth)

    useEffect(() => {
        localStorage.setItem("AuthCode", auth!)
    }, [])

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
