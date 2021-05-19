import './App.css';
import {Link, BrowserRouter, Route} from "react-router-dom";
import Counter from "./components/Counter";

function App() {

    return (
        <BrowserRouter>
            <div id="app">
                <Link to='/counter'>Counter</Link>
                <Route path={'/counter'} component={Counter}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
