import { FC, useState, useRef, useEffect } from 'react'
import "../scss/addPlaylist.css"
import { PlayListProps } from "../Playlists/Playlists"
import { State } from "../Playlists/createPlayList"

interface AddPlayListProps {songname:string, setFalse: PlayListProps["hideContainer"]}

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

const AddToPlaylist: FC<AddPlayListProps> = ({songname, setFalse}) => {
    const [userPlayLists, setUserPlayLists] = useState<State[]>([])
    const addPlaylistRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setUserPlayLists(JSON.parse(localStorage.getItem("playlists")!)) 
    }, [])

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
        <div className={"addPlaylist"}>

            <div className="add-playlist-container"  ref={addPlaylistRef}>
                <div className="song-name-container">
                    <p>Where do you want to add {songname}?</p>
                </div>
                <div className="user-playlists-container">
                    {
                        userPlayLists.map(playlist => {
                            return <UserPlayLists name={playlist.playlistName} imageUri={playlist.playlistUri} hideContainer={setFalse} key={playlist.playlistName}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AddToPlaylist
