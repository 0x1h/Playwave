import React from 'react'

const ResultComponent = () => {
    return (
        <div className="result-component">
            <div className="song-info">
                <div className="song-img">
                    <div className="play-bg">
                        <span className="triangle"></span>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Kesha_Warrior.jpeg/220px-Kesha_Warrior.jpeg" alt="" />
                </div>
                <div className="song-stuff">
                    <div className="song-name">Die Young</div>
                </div>
            </div>
            <div className="dot-box">
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
            </div>
        </div>
    )
}


const FoundSong = () => {
    return (
        <div className="FoundSong-Container">
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
            <ResultComponent />            
        </div>
    )
}

export default FoundSong
