import { useHistory } from "react-router-dom"
import Waves from "../../Assets/Theme/Landing-wave.svg"


const GetStarted = () => {
    let history = useHistory()
    
    return (
        <div className="getStarted">
            <div className="Slogan">
                <h1>
                    Explore <br></br> Musics 
                </h1>
            </div>
            <div className="Authorize">
                <div className="authorize-button" onClick={() => history.push("/Setup")}>
                    <p>Sign up</p>
                </div>
            </div>
            <img src={Waves} alt="" className="Waves"/>
        </div>
    )
}

export default GetStarted
