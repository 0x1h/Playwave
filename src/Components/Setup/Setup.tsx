import {FC} from 'react'; 
import Nav from "../Landing/Nav"
import Slogan from "./Slogan"
import Form from "./Form"
import "./scss/style.css"

const Setup: FC<{appearComponent: () => void}> = ({appearComponent}) => {
    return (
        <div>
            <Nav />
            <div className="container">
                <Slogan />
                <Form appearComponent={appearComponent}/>
            </div>
        </div>
    )
}

export default Setup
