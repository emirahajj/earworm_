import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import placeholder from "../img/placeholder-dark.png"
import SpotifyWebApi from 'spotify-web-api-js'
import "../App.css"

const ArtistsThumbnail = (props) => {
    const [spotifyID, setSpotifyArtistURL] = useState("");
    const [artistName, setArtistName] = useState(props.name);
    const [token, setToken] = useState(props.token);

    useEffect(() => {
        let spotify = new SpotifyWebApi();
        spotify.setAccessToken(token);
        spotify.searchArtists(`${artistName}`).then((data) => {
            setSpotifyArtistURL(data.artists.items[0].images[1].url);
        }).catch((err) => {
            console.log(err);
        })

    }, [artistName, token])

    return (
        <div>
            <div className="flex justify-center">
                <Link to={"/artists/" + props.name.replace(' ', '-')}>
                    <div className="flex-none w-48 h-48 rounded-2xl overflow-hidden shadow-md fade-in transition duration-500 ease-in-out transform hover:scale-110 fade-in">
                        {(spotifyID ?
                            <img className="object-cover object-center fade-in h-full w-full" src={spotifyID} alt="N/A"></img>
                            :
                            <img className="h-full" src={placeholder} alt="Artist Cover"></img>
                        )}
                    </div>
                </Link>
            </div>

            <div className="flex justify-center mb-8 fade-in">
                <Link to={"/artists/" + props.name.replace(' ', '-')}>
                    <p className="mt-4 text-lg text-center font-bold">{props.name}</p>
                </Link>
            </div>
        </div>
    )
}

export default ArtistsThumbnail
