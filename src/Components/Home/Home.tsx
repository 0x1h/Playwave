import { useState, Fragment } from 'react';
import PlaylistsCont from './Playlists/PlaylistsCont';
import SuggestionCont from "./Suggestions/SuggestionCont"
import AddToPlaylist from './Suggestions/AddToPlaylist';
import CreatePlayList from "./Playlists/createPlayList"
import "./scss/home-style.css"

const Home = (): JSX.Element => {
    const [hideAddPlaylist, setHidePlaylist] = useState<boolean>(true)
    const [addPlayList, setAddPlayList] = useState<boolean>(true)

    return (
        <Fragment>
            {!hideAddPlaylist ? <AddToPlaylist songname={"TEST"} setFalse={() => setHidePlaylist(true)}/>: null}
            {!addPlayList ? <CreatePlayList close={()=> setAddPlayList(true)}/> : null}
            <div className="home-container">
                <PlaylistsCont addPlayListLayout={() => setAddPlayList(false)}/>
                <SuggestionCont setFalse={() => setHidePlaylist(false)}/>
                
            </div>
        </Fragment>
    )
}
  
export default Home  
