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
                "x-rapidapi-key": "3ed5717cfamsh84335cd3dde52fcp14b904jsn0282abb98094", //PASSWORD HERE!
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
                <img src={artistImg} alt="N/A"></img>
                :
                <img className="m-auto" src={logo} alt="Album Cover"></img>
            )}
        </div>
    );



}

export default ArtistsThumbImg