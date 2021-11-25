import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { State } from "../../Setup/Form"
import { emptyImageSource } from "../../Home/Playlists/PlaylistsCont"
import ImageChanger from "./ImageChanger"
import "./scss/edit-styles.css"

export type InputType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const ProfileEdit = () => {
  let history = useHistory()
  const [checkDifference, setCheckDifference] = useState<boolean>(false)
  const [showImageChange, setShowImageChange] = useState<boolean>(false)
  const [profileInfo, setProfileInfo] = useState<State>({
    imgSrc: "",
    nickname: "",
    name: "",
    surname: "",
    bio: "",
  })

  useEffect(() => {
    const storage: State = JSON.parse(localStorage.getItem("user-data")!)
    setProfileInfo(storage)
  }, [])

  //Checking object equality
  const isEqual = (obj1: State, obj2: State): boolean => {
    const obj1Keys: string[] = Object.values(obj1)
    const obj2Keys: string[] = Object.values(obj2)

    if (obj1Keys.length !== obj2Keys.length) return false

    for (let i = 0; i < obj1Keys.length; i++) {
      if (obj1Keys[i] !== obj2Keys[i]) return false
    }

    return true
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("user-data")!)
    const isequal: boolean = isEqual(storage, profileInfo)

    if (profileInfo.name !== "" && isequal) setCheckDifference(false)
    else setCheckDifference(true)
  }, [profileInfo])

  const inputHandler = (e: InputType) => {
    const name = e.target.name
    const value = e.target.value

    setProfileInfo({ ...profileInfo, [name]: value })
  }

  return (
    <>
      {showImageChange ? (
        <ImageChanger
          inputHandler={inputHandler}
          value={profileInfo.imgSrc}
          changeState={() => setShowImageChange(false)}
        />
      ) : null}
      <div className="profile-edit-component">
        <div className="edit-component">
          <div className="profile-picture">
            <div className="profile-img">
              <img src={profileInfo.imgSrc.trim() === '' ? emptyImageSource : profileInfo.imgSrc} alt="" />
            </div>
            <button onClick={() => setShowImageChange(true)}>Change Picture</button>
          </div>
          <div className="profile-info">
            <input
              type="text"
              value={profileInfo.nickname}
              className="nickname-input"
              name="nickname"
              onChange={inputHandler}
              spellCheck={false}
              maxLength={10}
            />
            <h3>
              {profileInfo.name} {profileInfo.surname}
            </h3>
            <h2>About me</h2>
            <textarea
              value={profileInfo.bio}
              className="textarea"
              name="bio"
              onChange={inputHandler}
              placeholder="tell us something about you..."
            />
            <div className="buttons-wrapper">
              <div className="buttons-center">
                <button onClick={() => history.push("/Profile")}>Cancel</button>
                <button
                  className={checkDifference ? "save-btn" : "save-btn hidden"}
                  onClick={() => {
                    if (profileInfo.nickname.trim() === "")
                      alert("name mustn't be empty")
                    else {
                      localStorage.setItem("user-data", JSON.stringify(profileInfo))
                      setCheckDifference(false)
                    }
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileEdit
