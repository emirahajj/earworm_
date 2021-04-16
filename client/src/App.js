import React from 'react';
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Artists from "./pages/Artists"
import About from "./pages/About"
import Genres from "./pages/Genres"
import IndividualGenre from "./pages/IndividualGenre"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import IndividualArtist from './pages/IndividualArtist';
import IndividualAlbum from './pages/IndividualAlbum';

const App = () => {
    return (

        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/home" component={Home} />
                    <Route exact path="/artists" component={Artists} />
                    <Route path="/artists/:artist_name" component={IndividualArtist} />
                    <Route path="/about" component={About} />
                    <Route exact path="/genres" component={Genres} />
                    <Route path="/genres/:genreId" component={IndividualGenre} />
                    <Route exact path="/albums/:albumId" component={IndividualAlbum} />
                    <Route>
                        <Redirect to="/home"/>
                    </Route>


                </Switch>
            </div>
        </Router>
    );
}

export default App;
