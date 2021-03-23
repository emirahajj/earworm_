import fetchData from './api/index';
import React, { useState, useEffect } from 'react';
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Artist from "./pages/Artist"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/home" component={Home} />
                    <Route path="/artist" component={Artist} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
