import { useState, useEffect, FC } from 'react'
import { State } from '../Home/Playlists/createPlayList'
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

    return (
        <div className="playlist-edit-component">
            <div className="edit-box">
                <div className="main-options">
                    <div className="image-update">
                        <div className="img-box">
                            <img src={update.newImage} alt="" />
                        </div>
                        <div className="image-url-input">
                            <p style={{color: "#FFF"}}>Image URL</p>
                            <input type="text" name="newImage" placeholder="New Image URL" value={update.newImage} onChange={inputHandler}/>
                        </div>
                        <div className="image-url-input">
                            <p style={{color: "#FFF"}}>Playlist Name</p>
                            <input type="text" name="newTitle" placeholder="New Image URL" value={update.newTitle} onChange={inputHandler}/>
                        </div>
                    </div>
                </div>
            <div className="btn-container">
                <button className="cancel" onClick={closeEdit}>Cancel</button>
                <button className="save" onClick={() => updateState(update, id)}>Save</button>
            </div>
            </div>
        </div>
    )
}

export default EditComponent
