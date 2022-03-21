import { useEffect, useState, FC } from "react"
import { useHistory, useLocation } from "react-router-dom"
import Logo from "../../Assets/Logo/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import Menu from "./Menu/Menu"
import Hamburger from "./Hamburger"
import "./scss/nav-style.css"
import axios from "axios"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

const ProfileNav: FC<{
  showHome: boolean
  changeStateFalse: () => void
  changeStateTrue: () => void
  showPlaylist: () => void
}> = ({ showHome, changeStateFalse, changeStateTrue, showPlaylist }) => {
  const [profileImg, setProfileImage] = useState<{ imgSrc: string } | null>(null)
  const [openmenu, setOpenmenu] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const sendData = async () => {
      await axios.post("http://localhost:3001/musics", {
          text: "kesha"
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }

    sendData()
    
  //   const fetchdata = async () => {
  //     await axios.get("http://localhost:3001/musics")
  //     .then(data => console.log(data.data))
  //     .catch(err => console.log(err))
  // }
  //   fetchdata()
  }, [])

  useEffect(() => {
    if (location.pathname === "/Profile" || location.pathname === "/Profile-Edit")
      changeStateTrue()
    else changeStateFalse()
  }, [location])

  useEffect(() => {
    if (!profileImg) {
      setProfileImage(JSON.parse(localStorage.getItem("user-data")!))
    }
  }, [profileImg])

  let history = useHistory()

  return (
    <>
      {openmenu ? (
        <Menu
          open={openmenu}
          close={() => setOpenmenu(false)}
          addPlaylist={showPlaylist}
        />
      ) : null}
      <div className="Profile-Navbar">
        <div
          className="Redirect-Home"
          onClick={() => {
            history.push("/Home")
            changeStateFalse()
          }}
        >
          <div className="img-container">
            <img src={Logo} alt="" />
          </div>
          <h3>Playwave</h3>
        </div>
        <>
          {!showHome ? (
            <div
              className="Redirect-Profile"
              onClick={() => history.push("/Profile")}
            >
              <div className="img-and-Profile">
                <div className="profile-image">
                  <img src={profileImg?.imgSrc ?? ""} alt="" />
                </div>
                <p>Profile</p>
              </div>

              <span className="triangle"></span>
            </div>
          ) : (
            <div className="home-button" onClick={() => history.push("/Home")}>
              <FontAwesomeIcon icon={faHome as IconProp} />
              Home
            </div>
          )}
          <Hamburger openState={() => setOpenmenu(!openmenu)} checked={openmenu} />
        </>
      </div>
    </>
  )
}

export default ProfileNav
