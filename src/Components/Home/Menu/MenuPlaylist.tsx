import {useState, useEffect, FC} from 'react'
import { State } from '../Playlists/createPlayList'
import Playlistbox from './Playlistbox'

const MenuPlaylist: FC<{close: () => void}> = ({close}) => {
    const [playlist, setPlaylist] = useState<State[]>([])

    useEffect(() => {
        const playlistStorage = JSON.parse(localStorage.getItem("playlists")!)
        setPlaylist(playlistStorage)
    }, [])

    return (
        <div className="menu-playlist">
            <p>Your Playlists</p>
            <div className="playlist-wrapper">
                {
                    playlist.length > 0 ? 
                    playlist.map(e => {
                        return <Playlistbox id={e.playlist_id} name={e.playlistName} img_url={e.playlistUri} key={e.playlist_id} close={close}/>
                    }) : <p className="no-playlist">You don't have any playlist 😢</p>
                } 
            </div>
        </div>
    )
}

export default MenuPlaylist
