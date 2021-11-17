import React, {useReducer, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { playlistReducer, State } from '../../Hooks/CurrplaylistHook'
import { State as PlaylistType, defaultState} from '../Home/Playlists/createPlayList'
import PlaylistsCont from '../Home/Playlists/PlaylistsCont'
import CreatePlayList from '../Home/Playlists/createPlayList'
import './scss/style.css'

const defaultPlaylistState: State = {
    curr_playlist: defaultState,
    showAddPlaylist: false
}

const CurrPlaylist = () => {
    const [state, dispatch] = useReducer(playlistReducer, defaultPlaylistState)
    const {id} = useParams<{id: string}>()

    useEffect(() => {
        const find_playlist: PlaylistType= JSON.parse(localStorage.getItem('playlists')!).find((e: any) => e.playlist_id === id) 
        dispatch({type: 'SET_PLAYLIST', payload: find_playlist})
    }, [id])

    return (
        <React.Fragment>
            {state.showAddPlaylist ? <CreatePlayList close={() => dispatch({type: 'SHOW_ADD_PLAYLIST', payload: false})}/> : null}
            <div className="home-container">
                <PlaylistsCont addPlayListLayout={() => dispatch({type: 'SHOW_ADD_PLAYLIST', payload: true})}/>
                <div className="playlist-main">
                    <div className="playlist-info">
                        <div className="wrapper">
                            <div className="playlist-img">
                                <img src={state.curr_playlist.playlistUri} alt="playlist-img" />
                            </div>
                            <div className="playlist-main-info">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CurrPlaylist
