import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { useState, useEffect } from "react";
import Landing from "../Components/Landing/Landing"
import Setup from "../Components/Setup/Setup"
import Home from "../Components/Home/Home";
import ProfileNav from "../Components/Home/ProfileNav";
import {code} from "../App"

const logined: string | null = localStorage.getItem('isAuth');

const Playwave = () => {
    const [displayNav, setDisplayNav] = useState<boolean>(false)

    useEffect(() => {
        logined && setDisplayNav(true)
    }, [displayNav])

    return (
        <Router>
            {displayNav && <ProfileNav/>}
        <Switch>
            <Route exact path="/">
                {<Redirect to="/Welcome"/>}
            </Route>

            {displayNav && <Redirect exact from="/Welcome" to="/Home" />}

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

        </Switch>
    </Router>
    )
}
 
export default Playwave 