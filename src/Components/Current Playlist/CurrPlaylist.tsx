import { Fragment,  useReducer, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import { playlistReducer, State } from "../../Hooks/CurrplaylistHook";
import { State as PlaylistType, defaultState } from "../Home/Playlists/createPlayList";
import PlaylistSong from "./PlaylistSong";
import PlaylistsCont from "../Home/Playlists/PlaylistsCont";
import CreatePlayList from "../Home/Playlists/createPlayList";
import "./scss/style.css";

const defaultPlaylistState: State = {
  curr_playlist: defaultState,
  showAddPlaylist: false,
};

const CurrPlaylist:FC<{setData: (data: PlaylistType[]) => void, newAdded: PlaylistType[] }>  = ({setData, newAdded}) => {
  const [state, dispatch] = useReducer(playlistReducer, defaultPlaylistState);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const find_playlist: PlaylistType = JSON.parse(
      localStorage.getItem("playlists")!
    ).find((e: any) => e.playlist_id === id);
    dispatch({ type: "SET_PLAYLIST", payload: find_playlist });
  }, [id]);

  return (
    <Fragment>
      {state.showAddPlaylist ? (
        <CreatePlayList
          close={() => dispatch({ type: "SHOW_ADD_PLAYLIST", payload: false })}
          setData={setData!}
        />
      ) : null}
      <div className="home-container">
        <PlaylistsCont
          addPlayListLayout={() =>
            dispatch({ type: "SHOW_ADD_PLAYLIST", payload: true })
          }
          newAdded={newAdded}
          />
        <div className="playlist-main">
          <div className="playlist-info">
            <div className="wrapper">
              <div className="playlist-img">
                <img src={state.curr_playlist.playlistUri} alt="playlist-img" />
              </div>
              <div className="playlist-main-info">
                <p style={{color: '#1B1B1B'}}>Playlist</p>
                <h1>{state.curr_playlist.playlistName}</h1>
                <p style={{color: "#0BFF9F", fontWeight: "bolder"}}>Musics in Total: {state.curr_playlist.songs.length}</p>
              </div>
            </div>
          </div>
          {
            state.curr_playlist.songs.length > 0 ? 
            state.curr_playlist.songs.map((song: any, i: number) => {
              return (
                <PlaylistSong index={i+1} img_url={song.image} song_name={song.name} song_uri={song.song_url}/>
              )
            }):
            <h3 style={{color: '#fff'}}>There is no any playlist 😢</h3>
          }
        </div> 
      </div>
    </Fragment>
  );
};

export default CurrPlaylist;
