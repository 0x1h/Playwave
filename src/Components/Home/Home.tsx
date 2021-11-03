import React, {useState, useEffect} from 'react';
import PlaylistsCont from './Playlists/PlaylistsCont';
import "./scss/home-style.css"
import SuggestionCont from "./Suggestions/SuggestionCont"

const Home = (): JSX.Element => {

    return (
        <div className="home-container">
            <PlaylistsCont />
            <SuggestionCont />
        </div>
    )
}

export default Home  
