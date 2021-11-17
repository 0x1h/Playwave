import { FC, useState, useRef, useEffect} from "react";
import { PlayListProps } from "../Playlists/Playlists";
import { State } from "../Playlists/createPlayList";
import { TopResultProp } from "../../Search/TopResult";
import "../scss/addPlaylist.css";

const UserPlayLists: FC<PlayListProps> = ({
  name,
  imageUri,
  playlist_id,
  addToPlayList
}) => {
    return (
        <div className="user-playlist" onClick={() => addToPlayList!(playlist_id!)}>
      <div className="playlist-photo-container">
        <img src={imageUri} alt="" />
      </div>
      <p style={{ marginLeft: "15px", color: "#FFF" }}>{name}</p>
    </div>
  );
};
interface AddPlayListProps {
  songname: string
  setFalse: PlayListProps["hideContainer"]
  song_data?: TopResultProp
}

const AddToPlaylist: FC<AddPlayListProps> = ({ songname, setFalse, song_data }) => {
    const [userPlayLists, setUserPlayLists] = useState<State[]>([]);
    const addPlaylistRef = useRef<HTMLDivElement>(null); 
    
    const addSongToPlaylist = (id: string) => {
        //Grabbing Whole Playlist Storage
        const curr_playlist = JSON.parse(localStorage.getItem('playlists')!)
        //Grabbing index of selected Playlist
        let playListIndex = curr_playlist.findIndex((playlist: any) => playlist.playlist_id === id)
        //adding in selected chosen song with another songs
        const updatePlayListSongs = [...curr_playlist[playListIndex].songs, song_data]
        //updating playlist
        curr_playlist[playListIndex].songs = updatePlayListSongs
        //Saving playlist in localStorage
        localStorage.setItem("playlists", JSON.stringify(curr_playlist))
        setFalse!()
      }

    useEffect(() => {
        setUserPlayLists(JSON.parse(localStorage.getItem("playlists")!));
    }, []);
    
    const closeAddPlayList = (e: any) => {
        if (addPlaylistRef.current && !addPlaylistRef.current.contains(e.target))
        setFalse!();
    };
    
  useEffect(() => {
      document.addEventListener("click", closeAddPlayList, true);
      return () => document.removeEventListener("click", closeAddPlayList, true);
    });
    
    return (
        <div className={"addPlaylist"}>
      <div className="add-playlist-container" ref={addPlaylistRef}>
        <div className="song-name-container">
          <p>Where do you want to add <span style={{color: "#0BFF9F", fontWeight: 'bolder'}}>{songname}</span>?</p>
        </div>
        <div className="user-playlists-container">
          {userPlayLists ? (
            userPlayLists.map((playlist) => {
              return (
                <UserPlayLists
                  name={playlist.playlistName}
                  imageUri={playlist.playlistUri} 
                  hideContainer={setFalse}
                  key={playlist.playlist_id}
                  addToPlayList={() => addSongToPlaylist(playlist.playlist_id)}
                  playlist_id={playlist.playlist_id}
                />
              );
            })
          ) : (
            <p style={{ color: "#FFF" }}>There is no any playlist 😢</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddToPlaylist;