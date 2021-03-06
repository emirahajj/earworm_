import React, { useState, memo } from 'react';
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Artists from "./pages/Artists"
import About from "./pages/About"
import Genres from "./pages/Genres"
import IndividualGenre from "./pages/IndividualGenre"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import IndividualArtist from './pages/IndividualArtist';
import IndividualAlbum from './pages/IndividualAlbum';
import SpotifyWidget from './components/SpotifyWidget';

const App = () => {

    const [spotifyID, setSpotifyID] = useState(" ");

    return (
        <Router>
            <div className="pb-20">
                <Switch >
                    <Route path="/" exact component={Landing} />
                    <Route path="/home" component={Home} />
                    <Route path="/artist/:artist_name" component={IndividualArtist} />
                    <Route exact path="/artists/:letter" component={Artists} />
                    <Route path="/about" component={About} />
                    <Route exact path="/genres" component={Genres} />
                    <Route path="/genres/:genreId" component={IndividualGenre} />
                    <Route exact path="/albums/:albumId" render={(props) => <IndividualAlbum albumID={props.match.params.albumId} onChangeAlbumId={setSpotifyID} />} />
                    <Route>
                        <Redirect to="/home" />
                    </Route>

                </Switch>
            </div>
            <SpotifyWidget spotifyID={spotifyID}></SpotifyWidget>
        </Router>
    );
}

export default memo(App);
