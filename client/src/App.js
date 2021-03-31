import fetchData from './api/index';
import React, { useState, useEffect } from 'react';
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Artists from "./pages/Artists"
import Genres from "./pages/Genres"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/home" component={Home} />
                    <Route path="/artists" component={Artists} />
                    <Route path="/genres" component={Genres} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
