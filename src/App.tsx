import React from 'react';
import {Switch,Router,HashRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.scss';
import Home from './pages/home';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
    return (
        <div className="App">
            <HashRouter >
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
