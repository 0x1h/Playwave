import { useState, Fragment, FC } from 'react';
import PlaylistsCont from './Playlists/PlaylistsCont';
import { State } from './Playlists/createPlayList';
import SuggestionCont from "./Suggestions/SuggestionCont"
import AddToPlaylist from './Suggestions/AddToPlaylist';
import CreatePlayList from "./Playlists/createPlayList"
import "./scss/home-style.css"

const Home: FC<{setData: (data: State[]) => void, playlists: State[]}> = ({setData, playlists}): JSX.Element => {
    const [hideAddPlaylist, setHidePlaylist] = useState<boolean>(true)
    const [addPlayList, setAddPlayList] = useState<boolean>(true)

    return (
        <Fragment>
            {!hideAddPlaylist ? <AddToPlaylist songname={"TEST"} setFalse={() => setHidePlaylist(true)}/>: null}
            {!addPlayList ? <CreatePlayList close={()=> setAddPlayList(true)} setData={setData}/> : null}
            <div className="home-container">
                <PlaylistsCont addPlayListLayout={() => setAddPlayList(false)} newAdded={playlists}/>
                <SuggestionCont setFalse={() => setHidePlaylist(false)}/>
                
            </div>
        </Fragment>
    )
}
  
export default Home  
