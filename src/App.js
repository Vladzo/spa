import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

function App() {

    return (
        <div id="app">
            <Router>
                <Link to={'/users'}><h2>Users</h2></Link>
                <Link to={'/posts'}><h2>Posts</h2></Link>

                <Switch>
                    <Route path={'/users'} render={() => <Users/>}/>
                    <Route path={'/posts'} render={() => <Posts/>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
