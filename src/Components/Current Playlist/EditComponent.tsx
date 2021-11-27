import { useState, useEffect, FC } from 'react'
import { State } from '../Home/Playlists/createPlayList'
import Warn from './Other/warn'
import "./scss/edit-style.css"


export interface UpdatedProps {
    newImage: string,
    newTitle: string
}
interface EditProps {
    prevData: State,
    closeEdit: () => void
    updateState: (newData: UpdatedProps, id: string) => void
    id: string
}

const EditComponent: FC<EditProps> = ({prevData, closeEdit, updateState, id}) => {
    const [update, setUpdate] = useState<UpdatedProps>({
        newImage: "",
        newTitle: ""
    })

    useEffect(() => {
        setUpdate({newImage: prevData.playlistUri, newTitle: prevData.playlistName})
    }, [prevData])

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name: string = e.target.name
        const value: string = e.target.value 

        setUpdate({...update, [name]: value})
    }

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
    }else getBase64((e.target.files![0]), (result: any): void => setUpdate({...update, ['newImage']: result}));
  }

    return (
        <div className="playlist-edit-component">
            <div className="edit-box">
                <div className="main-options">
                    <div className="image-update">
                        {update.newTitle.trim() === '' ? <Warn /> : null}
                        <div className="img-box">
                            <img src={update.newImage} alt="" />
                        </div>
                        <button className="upload-image">
                        <input accept="image/*" type='file' id="imgInp" onChange={fileUploadHandler}/>
                            Upload Image</button>
                        <div className="image-url-input">
                            <p style={{color: "#FFF"}}>Playlist Name</p>
                            <input type="text" name="newTitle" placeholder="New Image URL" value={update.newTitle} onChange={inputHandler} maxLength={12}/>
                        </div>
                    </div>
                </div>
            <div className="btn-container">
                <button className="cancel" onClick={closeEdit}>Cancel</button>
                <button className="save" onClick={() => {
                    if(update.newTitle.trim() === '') alert("you can't keep name blank")
                    else updateState(update, id)
                }}>Save</button>
            </div>
            </div>
        </div>
    )
}

export default EditComponent
