import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import UsersPosts from "./components/UsersPosts";
import Comments from "./components/Comments";

function App() {

    return (
        <div id="app">
            <Router>
                <Link to="/users"><h2>Users</h2></Link>
                <Link to="/posts"><h2>Posts</h2></Link>

                <Route exact path="/users" component={Users}/>
                <Route exact path="/posts" component={Posts}/>
                <Route exact path="/posts/user/:id" component={UsersPosts}/>
                <Route exact path="/posts/comments/:id" component={Comments}/>
            </Router>
        </div>
    );
}

export default App;
