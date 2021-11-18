import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { useState, useEffect } from "react";
import { State } from "../Components/Home/Playlists/createPlayList";
import Landing from "../Components/Landing/Landing"
import Setup from "../Components/Setup/Setup"
import Home from "../Components/Home/Home";
import ProfileNav from "../Components/Home/ProfileNav";
import SearchComponent from "../Components/Search/SeachComponent";
import CurrPlaylist from "../Components/Current Playlist/CurrPlaylist"
import Player from "./Player"

const Playwave = () => {
    const [displayNav, setDisplayNav] = useState<boolean>(false)
    const [selectedSong, setSelctedSong] = useState<string>('')
    const [playlists, setPlaylists] = useState<State[]>([])

    const setData = (data: State[]): void => {
        setPlaylists(data)
    }

    useEffect(() => {
        const logined: string | null = localStorage.getItem('isAuth');
        logined && setDisplayNav(true)
    }, [displayNav])

    const setMusicState = (url: string) => {
        if(url.trim() !== '') setSelctedSong(url)
    }

    return (
        <Router>
            {displayNav && <ProfileNav/>} 
        <Switch>
            <Route exact path="/">
                {<Redirect to="/Welcome"/>}
            </Route>

            {displayNav ? <Redirect exact from="/Welcome" to="/Home" /> : null}

            <Route path="/Welcome">
                <Landing />
            </Route>

            <Route path="/callback">
                {<Redirect to="/Setup" />}
            </Route>

            <Route exact path="/Setup">
                <Setup appearComponent={() => setDisplayNav(true)}/>
            </Route>

            <Route path="/Playlist/:id" children={<CurrPlaylist setData={setData} newAdded={playlists}/>}></Route>

            <Route exact path="/Home" >
                <Home setData={setData} playlists={playlists}/>
            </Route>

            <Route path="/Search">
                <SearchComponent setSelectedState={setMusicState} setData={setData} newAdded={playlists}/>
            </Route>
        </Switch>
        {displayNav ? <Player curr_song={selectedSong}/> : null}
    </Router>
    )
}
 
export default Playwave 