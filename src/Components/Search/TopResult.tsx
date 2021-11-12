import React from 'react' 

interface TopResultsProps {
    name?: string
    trackUri?: string;
}

const TopResult: React.FC<TopResultsProps> = ({name, trackUri}) => {
    return (
        <div className="Top-result" key={trackUri}>
            <div className="song-container">
                <div className="top-result-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Kesha_Warrior.jpeg/220px-Kesha_Warrior.jpeg" alt="" />
                </div>
                <div className="song-options">
                    <div className="song-name">{name}</div>
                    <div className="play-btn">
                        <span className="triangle"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopResult
