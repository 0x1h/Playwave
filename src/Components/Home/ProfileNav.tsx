import { FC } from "react";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Logo from "../../Assets/Logo/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./scss/nav-style.css";

interface UserProps {
  imgSrc: string;
}

const ProfileNav: FC<{ showHome: boolean; changeStateFalse: () => void; changeStateTrue: () => void  }> = ({
  showHome,
  changeStateFalse,
  changeStateTrue
}) => {
  const [profileImg, setProfileImage] = useState<UserProps | null>();
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === "/Profile") changeStateTrue();
    else changeStateFalse();
  }, [location])

  useEffect(() => {
    if (!profileImg) {
      setProfileImage(JSON.parse(localStorage.getItem("user-data")!));
    }
  }, [profileImg]);

  let history = useHistory();

  return (
    <div className="Profile-Navbar">
      <div className="Redirect-Home" onClick={() => {
              history.push("/Home");
              changeStateFalse();
            }}>
        <div className="img-container">
          <img src={Logo} alt="" />
        </div>
        <h3>Playwave</h3>
      </div>
      <>
        {!showHome ? (
          <div
            className="Redirect-Profile"
            onClick={() => {
              history.push("/Profile");
              changeStateTrue();
            }}
          >
            <div className="img-and-Profile">
              <div className="profile-image">
                <img src={profileImg?.imgSrc ?? ""} alt="" />
              </div>
              <p>Profile</p>
            </div>

            <span className="triangle activ"></span>
          </div>
        ) : (
          <div
            className="home-button"
            onClick={() => {
              history.push("/Home");
              changeStateFalse();
            }}
          >
            <FontAwesomeIcon icon={faHome} />
            Home
          </div>
        )}
      </>
    </div>
  );
};

export default ProfileNav;
