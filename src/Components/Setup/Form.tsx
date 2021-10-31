import React, { useState } from "react";
import DisplayEmptyImage from "./DisplayEmptyImage";
import ImageBox from "./ImageBox";

export interface inputInterface {
  imgSrc: string | undefined;
  name: string;
  surname: string;
  nickname: string;
  bio: string | undefined;
}

const formState: inputInterface = {
  imgSrc: "",
  name: "",
  surname: "",
  nickname: "",
  bio: "",
};

const Form = () => {
  const [formHandle, setFormHandle] = useState<inputInterface>(formState);
  const [openBox, setOpenBox] = useState(false);

  console.log(formHandle)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
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
              {formHandle.imgSrc ? <img src={formHandle.imgSrc} style={{width: "100%", position: "absolute"}}/> : <DisplayEmptyImage/>}
            </div>
            <div className="user-inputs">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formHandle.name}
                onChange={inputHandler}
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formHandle.surname}
                onChange={inputHandler}
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
