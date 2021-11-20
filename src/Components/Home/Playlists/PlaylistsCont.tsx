import { FC, useEffect, useState } from "react";
import Playlists from "./Playlists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import {State} from "./createPlayList"

export const emptyImageSource = "https://louisville.edu/history/images/noimage.jpg/image"

interface PlayListsProps {
    addPlayListLayout: () => void,
    newAdded: State[]
}

const PlaylistsCont: FC<PlayListsProps> = ({addPlayListLayout, newAdded}) => {
  const [playlist, setPlaylist] = useState<State[]>([])

  let history = useHistory();
  
  useEffect(() => {
    setPlaylist(newAdded!)
  }, [newAdded])

  useEffect(() => {
    const user_playlists = JSON.parse(localStorage.getItem("playlists")!) 
    setPlaylist(user_playlists)
  }, [])

  return (
    <div className="playlist-container">
      <div className="wrapper">
        <button className="playList-btn" onClick={() => history.push("/Home")}>
          <div className="btn-center">
            <FontAwesomeIcon icon={faHome} size="2x" />
            <p>Home</p>
          </div>
        </button>
        <button
          className="playList-btn"
          onClick={() => history.push("/Search")}
        >
          <div className="btn-center">
            <FontAwesomeIcon icon={faSearch} size="2x" />
            <p>Search</p>
          </div>
        </button>
        <div className="create-playlist">
          <h2>Your Playlists</h2>
          <button className="playlist-create-btn" onClick={addPlayListLayout}>
            Add New
          </button>
        </div>
        <div className="playlists-box">
            {
               playlist.length > 0 ? playlist.map(e => {
                return <Playlists name={e.playlistName} imageUri={e.playlistUri.trim() !== "" ? e.playlistUri : emptyImageSource} key={e.playlist_id} playlist_id={e.playlist_id}/>
              }) : <p style={{color: "#FFF"}}>There is no any playlist 😢</p> 
            }
        </div>
      </div> 
    </div>
  );
};

export default PlaylistsCont;
