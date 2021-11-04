import { FC, useState, useEffect, useRef } from "react";
import { PlayListProps } from "../Playlists/Playlists";

interface SuggProps {
  name: string;
  imgSrc: string;
  songUri?: string;
  setFalse: () => void
}

const Options: FC<{
  toggle: boolean;
  currSelect: string;
  setFalse: PlayListProps["hideContainer"];
}> = ({ toggle, currSelect, setFalse }) => {
  return (
    <div
      className={!toggle ? "Options-Box hidden" : "Options-Box"}
      onClick={setFalse}
    >
      <p style={{ color: "#FFF" }}>Add to playlist</p>
    </div>
  );
};

const SuggestedContent: FC<SuggProps> = ({ name, imgSrc, setFalse }) => {
  const [hide, setHide] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (optionsRef.current && !optionsRef.current.contains(e.target)) {
      setHide(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  });

  return (
    <div className="suggest">
      <div className="img-box">
        <img
          src={imgSrc}
          alt=""
          style={{ position: "absolute", width: "100%" }}
        />
      </div>
      <div className="suggest-title">
        <h4>{name}</h4>
      </div>
      <div className="options-container">
        <div className="options">
          <div className="play-btn">
            <span className="triangle"></span>
          </div>
          <div
            className="more-options"
            onClick={() => setHide(true)}
            ref={optionsRef}
          >
            <span className="dot"></span>
            <Options toggle={hide} currSelect={name} setFalse={setFalse}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedContent;
