import { FC } from "react";
import { State } from "../Home/Playlists/createPlayList";
import Playlistbox from "./Playlistbox";
import "./scss/playlists.css";

interface ProfilePlaylistsProps {
  playlists: State[];
}

const ProfilePlaylists: FC<ProfilePlaylistsProps> = ({ playlists }) => {
  return (
    <div className="profile-playlists">
      {playlists.length > 0 ? playlists.map((playlist) => {
        return (
          <Playlistbox
            playlist_name={playlist.playlistName}
            id={playlist.playlist_id}
            img_src={playlist.playlistUri}
            key={playlist.playlist_id}
          />
        );
      }) : <p>There is no any playlist 😥</p>}
    </div>
  );
};

export default ProfilePlaylists;
