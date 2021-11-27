import {FC} from 'react'; 
import Nav from "../Landing/Nav"
import Slogan from "./Slogan"
import Form from "./Form"
import "./scss/style.css"

const Setup: FC<{appearComponent: () => void}> = ({appearComponent}) => {
    return (
        <>  
        <Nav />
            <div className="form-container">
                <Slogan />
                <Form appearComponent={appearComponent}/>
            </div>
        </>
    )
}

export default Setup
