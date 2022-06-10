import { FC, useState, useEffect, useRef } from "react";
import { TopResultProp} from "../../Search/TopResult";
import { PlayListProps } from "../Playlists/Playlists";

interface SuggProps {
  name: string;
  imgSrc: string;
  songUri: string;
  setFalse: () => void
  setParentState: (curr_song: TopResultProp) => void
}

const Options: FC<{
  toggle: boolean;
  setFalse: PlayListProps["hideContainer"];
}> = ({ toggle, setFalse }) => {
  return (
    <div
      className={!toggle ? "Options-Box hidden" : "Options-Box"}
      onClick={() => {
        setFalse!()
      }}
    >
      <p style={{ color: "#FFF" }}>Add to playlist</p>
    </div>
  );
};

const SuggestedContent: FC<SuggProps> = ({ name, imgSrc, setFalse, songUri, setParentState}) => {
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
      <div className="glass" />
      <div className="trigger"
       onClick={() => setParentState({name: name,   image: imgSrc,
        song_url: songUri,})}
      style={{
        width: "100%",
        position: "absolute",
        height: "calc(100% - 50px)",
        top: "0",
        left: "0",
        zIndex: 20,
        cursor: "pointer"
      }}/>
      <div className="img-box">
        <img
          src={imgSrc}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <div className="wrapper-options">
      <div className="suggest-title">
        <h4>{name}</h4>
      </div>
      <div className="options-container">
        <div className="options">
          <div
            className="more-options"
            onClick={() => {
              setHide(true)
              setParentState({name: name,   image: imgSrc,
                song_url: songUri,})
            }}
            ref={optionsRef}
          >
            <span className="dot"></span>
            <Options toggle={hide} setFalse={setFalse} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SuggestedContent;
