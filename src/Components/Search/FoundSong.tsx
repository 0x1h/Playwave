import React, { FC, useEffect, useState } from "react";
import { SearchReultsType } from "./SearchBar";

interface ResultProps {
  songName: string;
  imageUri: string;
  song_url: string;
  updateState: (url: string) => void
}

const ResultComponent: React.FC<ResultProps> = ({
  songName,
  imageUri,
  song_url,
  updateState
}) => {
  return (
    <div className="result-component" onClick={() => updateState(song_url)}>
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
  );
};

const FoundSong: FC<{ results: SearchReultsType["songs"], setMusic: (url: string) => void }> = ({ results, setMusic }) => {
    const [song, setSong] = useState('')

    const updateSong = (url: string) => {
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
            songName={result.name}
            imageUri={result.small_image}
            song_url={result.track_Uri}
            updateState={updateSong}
            key={keys()}
            />
        );
      })}
    </div>
  );
};

export default FoundSong;
