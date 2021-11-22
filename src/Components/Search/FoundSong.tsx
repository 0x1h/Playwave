import React, { FC, useEffect, useState } from "react";
import {defaultState} from "./Results"
import { SearchReultsType } from "./SearchBar";
import {TopResultProp} from "./TopResult"

interface ResultProps {
  songData: TopResultProp
  updateState: (url: TopResultProp) => void
  appearAdding: () => void
}

const ResultComponent: React.FC<ResultProps> = ({songData, updateState, appearAdding}) => {
  return (
    <div className="result-component" onClick={() => updateState(songData)}>
      <div className="song-info">
        <div className="song-img">
          <div className="play-bg">
            <span className="triangle"></span>
          </div>
          <img src={songData.image} alt="" />
        </div>
        <div className="song-stuff">
          <div className="song-name">{songData.name}</div>
        </div>
      </div>
      <div className="dot-box" onClick={appearAdding}>
        <span className="dots"></span>
        <span className="dots"></span>
        <span className="dots"></span>
      </div>
    </div>
  );
};

interface FoundSongProps { 
  results: SearchReultsType["songs"],
  setMusic: (url: TopResultProp) => void,
  appearAdding: ResultProps['appearAdding']
}

const FoundSong: FC<FoundSongProps> = ({ results, setMusic, appearAdding }) => {
    const [song, setSong] = useState<TopResultProp>(defaultState)

    const updateSong = (url: TopResultProp) => {
        setSong(url)
    }

    useEffect(() => {
        setMusic(song)
    }, [song])

    const keys = (): string => {
      const randomNumber: number = Math.floor(1000 + Math.random() * 9000)
      return randomNumber.toString()
    }

    return (
      <div className="FoundSong-Container">
      {results.slice(1).map((result) => {
        return (
          <ResultComponent
          songData={{
            name: result.name,
            image: result.medium_image,
            song_url: result.track_Uri
          }}
          updateState={updateSong}
          appearAdding={appearAdding}
          key={keys()}
          />
          );
        })}
    </div>
  );
};

export default FoundSong;
