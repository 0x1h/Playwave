const GetStarted = () => {
    return (
        <div className="getStarted">
            <div className="Slogan">
                <h1>
                    Explore <br></br> Musics
                </h1>
            </div>
            <div className="Authorize">
                <div className="authorize-button">
                    <a href={`https://accounts.spotify.com/authorize?client_id=80f75b8b4aae4363af8127ad5f78c461&response_type=code&redirect_uri=http://localhost:3000%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09&show_dialog=true`}>
                        <p>Authorize with Spotify</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
