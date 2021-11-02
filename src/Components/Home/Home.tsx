import React, {useState, useEffect} from 'react';
import PlaylistsCont from './Playlists/PlaylistsCont';
import "./scss/home-style.css"

const Home = (): JSX.Element => {

    return (
        <div className="home-container">
            <PlaylistsCont />
        </div>
    )
}

export default Home  
