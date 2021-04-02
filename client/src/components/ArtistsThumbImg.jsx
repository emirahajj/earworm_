import React, { useState, useEffect } from "react";
import logo from "../img/icon.png"

const ArtistsThumbImg = (props) => {
    const [artistImg, setArtistImg] = useState(null);
    let artist_name = props.name.replace(" ", "%20");
    const artist_url = "https://theaudiodb.p.rapidapi.com/search.php?s=" + artist_name;
    useEffect(() => {
        fetch(artist_url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "<PASS>", //PASSWORD HERE!
                "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
            }
        })
            .then((response) => response.json())
            .then(jsonResponse => {
                if (jsonResponse['artists'] !== null) {
                    setArtistImg(jsonResponse['artists']['0'].strArtistThumb)
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, [artist_url])


    return (
        <div>
            {(artistImg ?
                <div className="flex flex-start">
                    <img className="flex-none w-24 h-24 rounded-2xl overflow-hidden shadow-md ml-12" src={artistImg} alt="N/A"></img>
                </div>
                :
                <img className="flex-none w-23 h-23 rounded-2xl overflow-hidden shadow-md ml-12" src={logo} alt="Album Cover"></img>
            )}
        </div>
    );



}

export default ArtistsThumbImg