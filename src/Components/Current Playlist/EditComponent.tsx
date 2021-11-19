import { useState, useEffect, FC } from 'react'
import { State } from '../Home/Playlists/createPlayList'
import axios from 'axios'
import "./scss/edit-style.css"

interface EditProps {
    prevData: State,
    closeEdit: () => void
}

const EditComponent: FC<EditProps> = ({prevData, closeEdit}) => {
    const [update, setUpdate] = useState({
        newImage: "",
        newTitle: ""
    })

    useEffect(() => {
        setUpdate({newImage: prevData.playlistUri, newTitle: prevData.playlistName})
    }, [prevData])

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name: string = e.target.name
        const value: string = e.target.value 

        //Todo: I will use that later
        // axios.get(value)
        // .then(() => console.log("yeahh it is photo"))
        // .catch(() => {console.log("it is not a photo")})

        setUpdate({...update, [name]: value})
    }

    return (
        <div className="edit-component">
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
                <button className="save">Save</button>
            </div>
            </div>
        </div>
    )
}

export default EditComponent
