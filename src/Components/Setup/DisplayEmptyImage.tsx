import { useState, useEffect, FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


const  DisplayEmptyImage: FC<{uploadImage: (dataURL: string) => void}> = ({uploadImage}) =>{
  const [files, setFiles] = useState<string>('')

  useEffect(() => {
    uploadImage(files)
  }, [files])

  //converting uploaded img in dataURL
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
    }else getBase64((e.target.files![0]), (result: any): void => setFiles(result));
  }
  
  return (
    <div className="emptyImage">
      <FontAwesomeIcon icon={faCamera as IconProp} size="3x" style={{ color: "#FFF"}} />
      <input accept="image/*" type='file' id="imgInp" onChange={fileUploadHandler}/>
      <label htmlFor="files" style={{color: "#FFF"}}>Select file</label>
    </div>
  );
}

export default DisplayEmptyImage;
