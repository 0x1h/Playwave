import React, {FC, useState } from "react";
import DisplayEmptyImage from "./DisplayEmptyImage";
import ImageBox from "./ImageBox";
import { useHistory } from "react-router-dom";

export type State = {
  imgSrc: string 
  name: string;
  surname: string;
  nickname: string;
  bio: string 
}

const formState: State = {
  imgSrc: "",
  name: "",
  surname: "",
  nickname: "",
  bio: "",
};

const Form: FC<{appearComponent: () => void}> = ({appearComponent}) => {
  const [formHandle, setFormHandle] = useState<State>(formState);
  const [openBox, setOpenBox] = useState(false);
  const [isError, setIsError] = useState<boolean>(false)
  let history = useHistory()

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if(!formHandle.name.trim() || !formHandle.surname.trim() || !formHandle.nickname.trim()){
      setIsError(true)
      alert("Nickname, name and surname are important, please fill these fields")
    }else {
      setIsError(false)
      localStorage.setItem("user-data", JSON.stringify(formHandle))
      localStorage.setItem("isAuth", "true")
      localStorage.setItem("playlists", "[]")
      history.push("/Home")
      appearComponent()
    }
  };

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setFormHandle({ ...formHandle, [name]: value });
  };

  return (
    <React.Fragment>
      {openBox && <ImageBox img={formHandle.imgSrc} close={() => setOpenBox(false)} input={inputHandler}/>}
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-box">
          <div className="base-inputs">
            <div className="img-circle" onClick={() => setOpenBox(true)} style={{overflow: 'hidden', position: 'relative'}}>
              {formHandle.imgSrc ? <img src={formHandle.imgSrc} style={{width: "100%", position: "absolute"}} alt=""/> : <DisplayEmptyImage/>}
            </div>
            <div className="user-inputs">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formHandle.name}
                onChange={inputHandler}
                className={isError ? "inputField warn": "inputField"}
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formHandle.surname}
                onChange={inputHandler}
                className={isError ? "inputField warn": "inputField"}
              />
            </div>
          </div>
          <div className="secondary-inputs">
            <input
              type="text"
              placeholder="Nickname"
              name="nickname"
              value={formHandle.nickname}
              onChange={inputHandler}
              className={isError ? "inputField warn": "inputField"}
            />
            <textarea
              name="bio"
              cols={30}
              rows={10}
              placeholder="About Me"
              value={formHandle.bio}
              onChange={inputHandler}
            ></textarea>
          </div>
          <div className="button-box">
            <button type="submit">I'm Ready! 🔥</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
