import { Fragment, useReducer, useEffect, FC, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { playlistReducer, State } from "../../Hooks/CurrplaylistHook";
import {
  State as PlaylistType,
  defaultState,
} from "../Home/Playlists/createPlayList";
import PlaylistSong from "./PlaylistSong";
import PlaylistsCont from "../Home/Playlists/PlaylistsCont";
import Options from "./Options";
import CreatePlayList from "../Home/Playlists/createPlayList";
import DeleteContainer from "./DeleteContainer";
import EditComponent from "./EditComponent";
import "./scss/style.css";

const defaultPlaylistState: State = {
  curr_playlist: defaultState,
  showAddPlaylist: false,
  showOptions: false,
  showDelete: false,
  showEdit: false,
};
interface CurrPlaListProps {
  setData: (data: PlaylistType[]) => void;
  newAdded: PlaylistType[];
  deleteAction: (playlist: string) => void;
  redirect: boolean;
}

const CurrPlaylist: FC<CurrPlaListProps> = ({
  setData,
  newAdded,
  deleteAction,
  redirect,
}) => {
  const [state, dispatch] = useReducer(playlistReducer, defaultPlaylistState);
  const [shortFont, setShortFont] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const playlistNameRef = useRef<HTMLHeadingElement>(null);
  let history = useHistory();

  useEffect(() => {
    if (redirect) {
      history.push("/Home");
    }
  }, [redirect]);

  const cancelAction = () => {
    dispatch({ type: "SHOW_DELETE", payload: false });
  };

  useEffect(() => {
    if (playlistNameRef.current?.innerHTML.length! > 10) setShortFont(true);
    else setShortFont(false);
  }, [state.curr_playlist.playlistName]);

  useEffect(() => {
    const find_playlist: PlaylistType = JSON.parse(
      localStorage.getItem("playlists")!
    ).find((e: any) => e.playlist_id === id);
    dispatch({ type: "SET_PLAYLIST", payload: find_playlist });
  }, [id]);

  return (
    <Fragment>
      {state.showEdit ? (
        <EditComponent
          prevData={state.curr_playlist}
          closeEdit={() =>
            dispatch({ type: "SHOW_EDIT", payload: false })}
        />
      ) : null}
      {state.showDelete ? (
        <DeleteContainer
          playlistName={state.curr_playlist.playlistName}
          deleteAction={deleteAction}
          cancelAction={cancelAction}
          playlistId={id}
        />
      ) : null}
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
            <div
              className="options"
              onClick={() => dispatch({ type: "SHOW_OPTIONS", payload: true })}
            >
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            {state.showOptions ? (
              <Options
                showOptions={() =>
                  dispatch({ type: "SHOW_OPTIONS", payload: false })
                }
                deletePlaylist={() =>
                  dispatch({ type: "SHOW_DELETE", payload: true })
                }
                editPlaylist={() =>
                  dispatch({ type: "SHOW_EDIT", payload: true })
                }
              />
            ) : null}
            <div className="wrapper">
              <div className="playlist-img">
                <img src={state.curr_playlist.playlistUri} alt="playlist-img" />
              </div>
              <div className="playlist-main-info">
                <p style={{ color: "#1B1B1B" }}>Playlist</p>
                <h1
                  ref={playlistNameRef}
                  className={shortFont ? "short-font" : ""}
                >
                  {state.curr_playlist.playlistName}
                </h1>
                <p style={{ color: "#0BFF9F", fontWeight: "bolder" }}>
                  Musics in Total: {state.curr_playlist.songs.length}
                </p>
              </div>
            </div>
          </div>
          {state.curr_playlist.songs.length > 0 ? (
            state.curr_playlist.songs.map((song: any, i: number) => {
              return (
                <PlaylistSong
                  index={i + 1}
                  img_url={song.image}
                  song_name={song.name}
                  song_uri={song.song_url}
                  key={song.song_url}
                />
              );
            })
          ) : (
            <h3 style={{ color: "#fff" }}>There is no any songs 😢</h3>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CurrPlaylist;
