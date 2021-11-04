import { useState, Fragment } from 'react';
import PlaylistsCont from './Playlists/PlaylistsCont';
import "./scss/home-style.css"
import SuggestionCont from "./Suggestions/SuggestionCont"
import AddToPlaylist from './Suggestions/AddToPlaylist';

const Home = (): JSX.Element => {
    const [hideAddPlaylist, setHidePlaylist] = useState<boolean>(true)

    return (
        <Fragment>
            <AddToPlaylist showup={hideAddPlaylist} songname={"TEST"} setFalse={() => setHidePlaylist(true)}/>
            <div className="home-container">
                <PlaylistsCont />
                <SuggestionCont setFalse={() => setHidePlaylist(false)}/>
                
            </div>
        </Fragment>
    )
}

export default Home  
