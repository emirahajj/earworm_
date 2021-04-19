import React, { useState, useEffect } from "react";
import placeholder from "../img/placeholder-dark.png"
import { fetchAudiodbArtist, fetchToken } from '../api/index'
import "../App.css"
import SpotifyWebApi from 'spotify-web-api-js'

const ArtistsThumbImg = (props) => {
    const [artistImg, setArtistImg] = useState(null);
    const [spotifyID, setSpotifyID] = useState("");
    let artist_name = props.name;

    useEffect(() => {
        fetchToken().then((res) => {
            let spotify = new SpotifyWebApi();
            spotify.setAccessToken(res.data.body["access_token"]);
            console.log(res.data.body["access_token"])
            spotify.searchArtists(`${artist_name}`).then((data) => {
                console.log(data);
                //
                setSpotifyID(data.artists.items[0].images[1].url);
            }).catch((err) => {
                console.log(err);
            })
        })
    }, [artist_name])




    return (
        <div>
            {(spotifyID ?
                <img className="fade-in" src={spotifyID} alt="N/A"></img>
                :
                <img className="h-full" src={placeholder} alt="Artist Cover"></img>
            )}
        </div>
    );



}

export default ArtistsThumbImg