import React, { useState, useEffect } from "react";
import { SearchReultsType } from "./SearchBar";



const TopResult: React.FC<{
  topresult: SearchReultsType["songs"],
  setMusic: (url: string) => void
}> = ({ topresult, setMusic }) => {
  const [topResultData, setTopResultData] = useState({
    image: "",
    name: "",
    song_url: "",
  });

  useEffect(() => {
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
          <div className="play-btn" onClick={() => setMusic(topResultData.song_url)}>
            <span className="triangle"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopResult;
