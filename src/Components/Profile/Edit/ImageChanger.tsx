import { FC, useRef, useEffect } from "react";
import { InputType } from "./ProfileEdit";

interface ImageProps {
  changeState: () => void;
  inputHandler: (e: InputType) => void;
  value: string;
}

const ImageChanger: FC<ImageProps> = ({ changeState, inputHandler, value }) => {
  const imageRef = useRef<HTMLDivElement>(null);

  const outSideClick = (e: any): void => {
    if (imageRef.current && !imageRef.current.contains(e.target)) {
      changeState();
    }
  };

  useEffect(() => {
    document.addEventListener("click", outSideClick, true);
    return () => document.removeEventListener("click", outSideClick);
  });

  return (
    <div className="ImageChanger">
      <div className="image-changer" ref={imageRef}>
        <h3>Edit Profle Photo</h3>
        <div className="new-img">
            <img src={value} alt="new-profile" />
        </div>
        <input type="text" value={value} name="imgSrc" onChange={inputHandler}/>
        <button className="insert" onClick={changeState}>Insert</button>
      </div>
    </div>
  );
};

export default ImageChanger;
