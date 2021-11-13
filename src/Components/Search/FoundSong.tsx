import React, {FC} from 'react'
import { SearchReultsType } from './SearchBar'

interface ResultProps {
    songName: string;
    imageUri: string;
}

const ResultComponent: React.FC<ResultProps> = ({songName, imageUri}) => {
    return (
        <div className="result-component">
            <div className="song-info">
                <div className="song-img">
                    <div className="play-bg">
                        <span className="triangle"></span>
                    </div>
                    <img src={imageUri} alt="" />
                </div>
                <div className="song-stuff">
                    <div className="song-name">{songName}</div>
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


const FoundSong: FC<{results: SearchReultsType['songs']}> = ({results}) => {    
    return (
        <div className="FoundSong-Container">
            {
                results.slice(1).map((result) => {
                    return (
                        <ResultComponent songName={result.name} imageUri={result.small_image}/>  
                    )
                })
            }   
        </div>
    )
}

export default FoundSong
