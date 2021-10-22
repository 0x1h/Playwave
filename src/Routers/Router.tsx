import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Landing from "../Components/Landing/Landing"

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

        </Switch>
    </Router>
    )
}
 
export default Playwave 