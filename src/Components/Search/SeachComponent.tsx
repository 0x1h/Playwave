import React, {useState} from 'react'
import CreatePlayList from '../Home/Playlists/createPlayList'
import PlaylistsCont from '../Home/Playlists/PlaylistsCont'
import SearchBar from "./SearchBar"
import "./scss/search.css"

function SeachComponent() {
    const [addPlayList, setAddPlayList] = useState<boolean>(true)

    return (
        <React.Fragment> 
            {!addPlayList ? <CreatePlayList close={()=> setAddPlayList(true)}/> : null} 
        <div className="home-container">
            <PlaylistsCont addPlayListLayout={() => setAddPlayList(false)}/>
            <div className="search-component">
                <SearchBar />
            </div>
        </div>
        </React.Fragment>
    )
}

export default SeachComponent
