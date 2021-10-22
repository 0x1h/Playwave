import React, {useState, useEffect} from 'react'

const GetStarted = () => {
    const [click, setClick] = useState<boolean>(false) 

    useEffect(() => {
        if(click) {
            const myWindow = window.open(`https://accounts.spotify.com/authorize?client_id=80f75b8b4aae4363af8127ad5f78c461&response_type=code&redirect_uri=http://localhost:3000%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09&show_dialog=true`, "", "width=500,height=700");
        }

        setClick(false)
    }, [click])

    return (
        <div className="getStarted">
            <div className="Slogan">
                <h1>
                    Explore <br></br> Musics
                </h1>
            </div>
            <div className="Authorize">
                <div className="authorize-button" onClick={(): void => setClick(true)}>
                    <p>Authorize with Spotify</p>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
