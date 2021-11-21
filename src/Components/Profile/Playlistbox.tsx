import { FC } from 'react'
import { useHistory } from 'react-router-dom'

interface PlaylistboxProps {
    img_src: string,
    id: string,
    playlist_name: string
} 

const Playlistbox: FC<PlaylistboxProps> = ({img_src, id, playlist_name}) => {
    let history = useHistory()

    return (
        <div className="playlist-box" onClick={() => history.push(`/Playlist/${id}`)}>
            <div className="playlist-img">
                <img src={img_src} alt="" />
            </div>
            <p>{playlist_name}</p>
        </div>
    )
}

export default Playlistbox
