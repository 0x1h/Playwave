import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { State } from "./Form"
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ImageUpload {
  img: State["imgSrc"];
  close: () => void;
  input: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const ImageBox: FC<ImageUpload> = ({ img, close, input }) => {
  return (
    <div className="imgSource-box">
      <div className="src-container">
        <div className="close-btn">
          <FontAwesomeIcon
            onClick={close}
            icon={faTimes as IconProp}
            style={{
              color: "#FFF",
              position: "absolute",
              right: "0",
              transform: "translate(-10px, 5px)",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Image Source" onChange={input} value={img} name="imgSrc"/>
        </div>
        <div className="button-box" style={{height:"40px"}}>
          <button style={{width: "120px", height: "40px"}} onClick={close}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
