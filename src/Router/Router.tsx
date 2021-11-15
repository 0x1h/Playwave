import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { useState, useEffect } from "react";
import Landing from "../Components/Landing/Landing"
import Setup from "../Components/Setup/Setup"
import Home from "../Components/Home/Home";
import ProfileNav from "../Components/Home/ProfileNav";
import SearchComponent from "../Components/Search/SeachComponent";
import Player from "./Player"
import {code} from "../App"

const Playwave = () => {
    const [displayNav, setDisplayNav] = useState<boolean>(false)
    const [selectedSong, setSelctedSong] = useState<string>('')

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
                <Setup code={code}/>
            </Route>

            <Route exact path="/Home" component={Home} />

            <Route path="/Search">
                <SearchComponent setSelectedState={setMusicState}/>
            </Route>
        </Switch>
        <Player curr_song={selectedSong}/>
    </Router>
    )
}
 
export default Playwave 