import { useHistory } from "react-router-dom"

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
                    <p>Authorize with Spotify</p>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
