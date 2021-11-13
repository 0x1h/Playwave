import React from 'react' 
import { SearchReultsType } from './SearchBar'

const TopResult: React.FC<{topresult: SearchReultsType['songs']}> = ({topresult}) => {
    //! Must be fixed if state is undefied issue
    return (
        <div className="Top-result">
            <div className="song-container">
                <div className="top-result-img">
                    <img src={''} alt="" />
                </div>
                <div className="song-options">
                    <div className="song-name">{''}</div>
                    <div className="play-btn">
                        <span className="triangle"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopResult