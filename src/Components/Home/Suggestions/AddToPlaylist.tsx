import { FC, useState, useRef, useEffect } from 'react'
import "../scss/addPlaylist.css"
import { PlayListProps } from "../Playlists/Playlists"

interface AddPlayListProps {showup: boolean, songname:string, setFalse: PlayListProps["hideContainer"]}

const UserPlayLists: FC<PlayListProps> = ({name, imageUri, hideContainer}) => {
    return (
        <div className="user-playlist" onClick={hideContainer}>
            <div className="playlist-photo-container">
                <img src={imageUri} alt="" />
            </div>
            <p style={{marginLeft: "15px", color: "#FFF"}}>{name}</p>
        </div>
    )
}

const AddToPlaylist: FC<AddPlayListProps> = ({showup, songname, setFalse}) => {
    //must be removed these stuff
    const [userPlayLists, setUserPlayLists] = useState<PlayListProps[]>([
        {name: "<void />", imageUri:"https://i.pinimg.com/236x/25/97/33/2597338c5ecd8a37c4cc7a6154b9a6f1.jpg"},
        {name: "<void />", imageUri:"https://i.pinimg.com/236x/25/97/33/2597338c5ecd8a37c4cc7a6154b9a6f1.jpg"},
        {name: "<void />", imageUri:"https://i.pinimg.com/236x/25/97/33/2597338c5ecd8a37c4cc7a6154b9a6f1.jpg"},
        {name: "<void />", imageUri:"https://i.pinimg.com/236x/25/97/33/2597338c5ecd8a37c4cc7a6154b9a6f1.jpg"},
        {name: "<void />", imageUri:"https://i.pinimg.com/236x/25/97/33/2597338c5ecd8a37c4cc7a6154b9a6f1.jpg"},
        {name: "<void />", imageUri:"https://i.pinimg.com/236x/25/97/33/2597338c5ecd8a37c4cc7a6154b9a6f1.jpg"},
        {name: "<void />", imageUri:"https://i.pinimg.com/236x/25/97/33/2597338c5ecd8a37c4cc7a6154b9a6f1.jpg"} 
    ])

    const addPlaylistRef = useRef<HTMLDivElement>(null)

    const closeAddPlayList = (e: any) => {
        if (addPlaylistRef.current && !addPlaylistRef.current.contains(e.target)) {
            setFalse!()
        }
      };

      useEffect(() => {
        document.addEventListener("click", closeAddPlayList, true);

        return () => document.removeEventListener("click", closeAddPlayList, true); 
    })
  
    return (
        <div className={!showup ? "addPlaylist": "addPlaylist hidden"}>

            <div className="add-playlist-container"  ref={addPlaylistRef}>
                <div className="song-name-container">
                    <p>Where do you want to add {songname}?</p>
                </div>
                <div className="user-playlists-container">
                    {
                        userPlayLists.map(playlist => {
                            return <UserPlayLists name={playlist.name} imageUri={playlist.imageUri} hideContainer={setFalse}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AddToPlaylist
