import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
import Landing from "../Components/Landing/Landing"
import Setup from "../Components/Setup/Setup"
import Dashboard from "../Components/Dashboard/Dashboard"
import {code} from "../App"

const logined: string | null = localStorage.getItem('isAuth');

const Playwave = () => {
    return (
        <Router>
        <Switch>
            
            <Route exact path="/">
                {<Redirect to="/Welcome"/>}
            </Route>

            {
                logined && <Redirect to="/Dashboard" />
            }

            <Route path="/Welcome">
                <Landing />
            </Route>

            <Route path="/callback">
                {<Redirect to="/Setup" />}
            </Route>

            <Route exact path="/Setup">
                <Setup code={code}/>
            </Route>

            if(logined){
                <Redirect to="/Dashboard"/>
            }
            <Route exact path="/Dashboard">
                <Dashboard />
            </Route>

        </Switch>
    </Router>
    )
}
 
export default Playwave 