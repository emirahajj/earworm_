import React, { useState, useEffect } from "react";
import placeholder from "../img/placeholder-dark.png"
import { fetchToken } from '../api/index'
import "../App.css"
import SpotifyWebApi from 'spotify-web-api-js'

const ArtistCircleImg = (props) => {
    const [spotifyID, setSpotifyID] = useState("");
    let artist_name = props.name;

    useEffect(() => {
        fetchToken().then((res) => {
            let spotify = new SpotifyWebApi();
            spotify.setAccessToken(res.data.body["access_token"]);
            spotify.searchArtists(`${artist_name}`).then((data) => {
                setSpotifyID(data.artists.items[0].images[1].url);
            }).catch((err) => {
                console.log(err);
            })
        })
    }, [artist_name])




    return (
        <div className="flex-none w-72 h-72 rounded-full overflow-hidden shadow-md mx-8">
            {(spotifyID ?
                <img className="object-cover object-center fade-in h-full w-full" src={spotifyID} alt="N/A"></img>
                :
                <img className="h-full" src={placeholder} alt="Artist Cover"></img>
            )}
        </div>
    );



}

export default ArtistCircleImg