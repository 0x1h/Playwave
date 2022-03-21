import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { State } from "../../Setup/Form"
import { emptyImageSource } from "../../Home/Playlists/PlaylistsCont"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import "./scss/edit-styles.css"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

export type InputType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const ProfileEdit = () => {
  let history = useHistory()
  const [checkDifference, setCheckDifference] = useState<boolean>(false)
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

  const getBase64 = (file: File, cb: (arg: string | ArrayBuffer | null) => void) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        cb(reader.result)
    };
    reader.onerror = (error) => {
        console.log('Error: ', error);
    };
  }

  const fileUploadHandler = (e: any) => {
    //uploaded file size
    const fileSize: number = parseFloat(((e.target.files![0].size / 1024) /1024).toFixed(3))
    
    if(fileSize > .150){
      alert("File size is higher than 150Kb please choose somthing lower")
    }else getBase64((e.target.files![0]), (result: any): void => {
      setProfileInfo({...profileInfo, ['imgSrc']: result})
    });
  }

  return (
    <>
      <div className="profile-edit-component">
        <div className="edit-component">
          <div className="profile-picture">
            <div className="profile-img">
              <div className="overlay-img">
              <input accept="image/*" type='file' id="imgInp" onChange={fileUploadHandler}/>
                <FontAwesomeIcon icon={faCamera as IconProp} size={'7x'} style={{color: "#0BFF9F"}}/>
              </div>
              <img src={profileInfo.imgSrc.trim() === '' ? emptyImageSource : profileInfo.imgSrc} alt="" />
            </div>
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
