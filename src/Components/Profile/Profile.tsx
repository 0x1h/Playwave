import { useState, useEffect, FC, useRef } from "react";
import { State } from "../Setup/Form";
import { useHistory } from "react-router-dom"
import { State as PlaylistProps } from "../Home/Playlists/createPlayList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { emptyImageSource } from "../Home/Playlists/PlaylistsCont";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import ProfilePlaylists from "./Profile-Playlists";
import "./scss/style.css";

interface EditPlaylistProps {
  close: () => void,
}

const EditPlaylistBtn: FC<EditPlaylistProps> = ({close}) => {
  const editBtnRef = useRef<HTMLDivElement>(null)
  let history = useHistory()

  const outSideClick = (e: any) => {
    if (editBtnRef.current && !editBtnRef.current.contains(e.target)) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("click", outSideClick, true)
    return () => document.removeEventListener("click", outSideClick)
  })

  return (
    <div className="edit-btn" ref={editBtnRef}>
      <button className="profile-edit" onClick={() => history.push("/Profile-Edit")}>
        <FontAwesomeIcon icon={faEdit} style={{marginRight: "10px"}}/>
        Edit</button>
  </div>
  )
}

const Profile = () => {
  const [showOption, setShowOption] = useState<boolean>(false)
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
          {showOption ? <EditPlaylistBtn close={() => setShowOption(false)}/> : null}
          <div className="options" onClick={() => setShowOption(true)}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="wrapper">
            <div className="img-container">
              <img src={profileInfo.imgSrc.trim() === '' ? emptyImageSource : profileInfo.imgSrc} alt="profile-photo" />
            </div>
            <div className="main-information">
              <h1>{profileInfo.nickname}</h1>
              <h3>
                {profileInfo.name} {profileInfo.surname}
              </h3>
              {profileInfo.bio.trim() !== "" ? (
                <>
                  <p className="about-me">About me</p>
                  <textarea className="bio-area" readOnly value={profileInfo.bio}/>
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
