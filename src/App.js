import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/Users/Users";
import UserDetails from "./components/Users/UserDetails";

function App() {

    return (
        <div id="app">
            <Router>
                <Link to={{pathname: '/users'}}><h2>Users</h2></Link>
                <Route exact path={'/users/details'} component={UserDetails}/>
                <Switch>
                    <Route path={'/users'} component={Users}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
