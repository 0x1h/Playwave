import { FC } from 'react'
import { useHistory } from "react-router-dom"

interface MenuPlaylistProps {
    id: string;
    name: string;
    img_url: string,
    close: () => void
}

const Playlistbox: FC<MenuPlaylistProps> = ({id, name, img_url, close}) => {
    let history = useHistory()
    
    return (
        <div className="playlist-box" onClick={() => {
            history.push(`/Playlist/${id}`)
            close()
            }}>
            <div className="playlist-img">
                <img src={img_url} alt="" />
            </div>
            <p className="playlist-name">{name}</p>
        </div>
    )
}

export default Playlistbox
