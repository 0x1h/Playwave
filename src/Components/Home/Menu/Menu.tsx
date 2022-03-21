import { FC, useEffect, useState } from "react"
import { useLocation, useHistory } from "react-router-dom"
import MenuPlaylist from "./MenuPlaylist"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "../scss/menu-style.css"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

const Menu: FC<{ open: boolean; close: () => void; addPlaylist: () => void }> = ({
  open,
  close,
  addPlaylist,
}) => {
  const [slide, setSlide] = useState<boolean>(false)
  const [locate, setLocate] = useState<boolean>(false)

  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (location.pathname === "/Profile" || location.pathname === "/Profile-Edit") setLocate(true)
    else setLocate(false)
  }, [location.pathname])

  useEffect(() => {
    if (open) setTimeout(() => setSlide(true), 1)
  }, [open])

  return (
    <div className={slide ? "toggle-menu slide" : "toggle-menu"}>
      <div className="wrapper">
        {!locate ? (
          <>
            <div
              className="profile-button"
              onClick={() => {
                history.push("/Search")
                close()
              }}
            >
              <FontAwesomeIcon icon={faSearch as IconProp} style={{ marginRight: "10px" }} />
              Search
            </div>
          </>
        ) : null}
        {!locate ? (
          <>
            <div
              className="profile-button"
              onClick={() => {
                addPlaylist()
                close()
              }}
            >
              Create Playlist
            </div>
          </>
        ) : null}
        {!locate ? (
          <>
            <div
              className="profile-button"
              onClick={() => {
                history.push("/Profile")
                close()
              }}
            >
              Profile
            </div>
          </>
        ) : (
          <>
            <div
              className="profile-button"
              onClick={() => {
                history.push("/Home")
                close()
              }}
            >
              Home
            </div>
          </>
        )}
        <MenuPlaylist close={close} />
      </div>
    </div>
  )
}

export default Menu
