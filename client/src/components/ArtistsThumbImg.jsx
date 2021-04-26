import React, { useState, useEffect } from "react";
import placeholder from "../img/placeholder-dark.png"
import { fetchToken } from '../api/index'
import "../App.css"
import SpotifyWebApi from 'spotify-web-api-js'

const ArtistsThumbImg = (props) => {
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
        <div className="flex-none w-48 h-48 rounded-2xl overflow-hidden shadow-md fade-in transition duration-500 ease-in-out transform hover:scale-110 fade-in">
            {(spotifyID ?
                <img className="object-cover object-center fade-in h-full w-full" src={spotifyID} alt="N/A"></img>
                :
                <img className="h-full" src={placeholder} alt="Artist Cover"></img>
            )}
        </div>
    );



}

export default ArtistsThumbImg