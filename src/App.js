import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import Characters from "./components/Characters/Characters";
import CharacterDetails from "./components/Characters/CharacterDetails";

function App() {

    return (
        <div id="app">
            <Router>
                <Link to={'/characters'}><h2>Characters</h2></Link>
                <Link to={'/inventory'}><h2>Inventory</h2></Link>

                <Switch>
                    <Route exact path={'/characters'} component = {Characters}/>
                    <Route exact path={'/inventory'} render={() => <Inventory/>}/>
                    <Route exact path={'/characters/details/:id'} component={CharacterDetails}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
