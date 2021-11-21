import { useState, useEffect } from "react";
import { State } from "../Setup/Form";
import { State as PlaylistProps } from "../Home/Playlists/createPlayList";
import ProfilePlaylists from "./Profile-Playlists";
import "./scss/style.css";

const Profile = () => {
  const [profilePlaylists, setProfilePlaylists] = useState<PlaylistProps[]>([]);
  const [profileInfo, setProfileInfo] = useState<State>({
    imgSrc: "",
    name: "",
    surname: "",
    nickname: "",
    bio: "",
  });

  useEffect(() => {
    //pre-load of localStorage data
    const profile_stuff_storage: State = JSON.parse(
      localStorage.getItem("user-data")!
    );

    const playlists_total_storage: PlaylistProps[] = JSON.parse(
      localStorage.getItem("playlists")!
    );

    setProfileInfo(profile_stuff_storage);
    playlists_total_storage && setProfilePlaylists(playlists_total_storage);
  }, []);

  return (
    <>
      <div className="profile">
        <div className="profile-container">
          <div className="options">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="wrapper">
            <div className="img-container">
              <img src={profileInfo.imgSrc} alt="profile-photo" />
            </div>
            <div className="main-information">
              <h1>{profileInfo.nickname}</h1>
              <h3>
                {profileInfo.name} {profileInfo.surname}
              </h3>
              {profileInfo.bio.trim() !== "" ? (
                <>
                  <p className="about-me">About me</p>
                  <textarea className="bio-area" readOnly={true} value={profileInfo.bio}/>
                </>
              ) : null}
              <div className="playlist-total">
                <h4>
                  Playlists:
                </h4>
                <div className="square">{profilePlaylists.length}</div>
              </div>
            </div>
          </div>
        </div>
        <ProfilePlaylists playlists={profilePlaylists}/>
      </div>
    </>
  );
};

export default Profile;
