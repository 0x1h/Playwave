import React, { useState, useEffect } from "react";
import { SearchReultsType } from "./SearchBar";
import { defaultState } from "./Results";

export interface TopResultProp {
  name: string,
  image: string,
  song_url: string
}

const TopResult: React.FC<{
  topresult: SearchReultsType["songs"],
  setMusic: (url: TopResultProp) => void
}> = ({ topresult, setMusic }) => {
  const [topResultData, setTopResultData] = useState(defaultState);

  useEffect(() => {
    //Don't Update state if response is undefined    
    if (topresult[0] === undefined) return;
    
    setTopResultData({
      image: topresult[0].medium_image,
      name: topresult[0].name,
      song_url: topresult[0].track_Uri,
    
    });
  }, []);


  return (
    <div className="Top-result">
      <div className="song-container">
        <div className="top-result-img">
          <img src={topResultData.image} alt="" />
        </div>
        <div className="song-options">
          <div className="song-name">{topResultData.name}</div>
          <div className="play-btn" onClick={() => setMusic(topResultData)}>
            <span className="triangle"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopResult;
