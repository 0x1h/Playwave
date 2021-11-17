import React, {useReducer, useEffect} from 'react'
import {playlistReducer, State} from '../../Hooks/CurrplaylistHook'
import PlaylistsCont from '../Home/Playlists/PlaylistsCont'
import CreatePlayList from '../Home/Playlists/createPlayList'


const defaultPlaylistState: State = {
    playlist_songs: [],
    showAddPlaylist: false
}


const CurrPlaylist = () => {
    const [state, dispatch] = useReducer(playlistReducer, defaultPlaylistState)

    return (
        <React.Fragment>
            {state.showAddPlaylist ? <CreatePlayList close={() => dispatch({type: 'SHOW_ADD_PLAYLIST', payload: false})}/> : null}
            <div className="home-container">
                <PlaylistsCont addPlayListLayout={() => dispatch({type: 'SHOW_ADD_PLAYLIST', payload: true})}/>
            </div>
        </React.Fragment>
    )
}

export default CurrPlaylist
