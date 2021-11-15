import React, {useState, useEffect} from 'react' 
import { SearchReultsType } from './SearchBar'

const TopResult: React.FC<{topresult: SearchReultsType['songs']}> = ({topresult}) => {
    const [topResultData, setTopResultData] = useState({
        image: "",
        name: ""
    })

    useEffect(() => {
        if(topresult[0] === undefined) return
        setTopResultData({image: topresult[0].medium_image, name: topresult[0].name})
    }, [])

    return (
        <div className="Top-result">
            <div className="song-container">
                <div className="top-result-img">
                    <img src={topResultData.image} alt="" />
                </div>
                <div className="song-options">
                    <div className="song-name">{topResultData.name}</div>
                    <div className="play-btn">
                        <span className="triangle"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopResult