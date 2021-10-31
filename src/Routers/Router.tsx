import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
import Landing from "../Components/Landing/Landing"
import Setup from "../Components/Setup/Setup"
import {code} from "../App"


const Playwave = () => {
    return (
        <Router>
        <Switch>
            
            <Route exact path="/">
                {<Redirect to="/Welcome"/>}
            </Route>

            <Route path="/Welcome">
                <Landing />
            </Route>

            <Route path="/callback">
                {<Redirect to="/Setup" />}
            </Route>

            <Route exact path="/Setup">
                <Setup code={code}/>
            </Route>

        </Switch>
    </Router>
    )
}
 
export default Playwave 