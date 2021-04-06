import React, { useState, useEffect } from "react";
import logo from "../img/icon.png"

const ArtistBio = (props) => {
    const [artistBio, setArtistBio] = useState(null);
    let artist_name = props.name.replace(" ", "%20");
    const artist_url = "https://theaudiodb.p.rapidapi.com/search.php?s=" + artist_name;
    useEffect(() => {
        fetch(artist_url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "PASS", //PASSWORD HERE!
                "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
            }
        })
            .then((response) => response.json())
            .then(jsonResponse => {
                if (jsonResponse['artists'] !== null) {
                    setArtistBio(jsonResponse['artists']['0'].strBiographyEN)
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, [artist_url])


    return (
        <div>
            {(artistBio ?
                <p className="text-justify">{artistBio}</p>
                :
                <p> Bio Not Available</p>
            )}
        </div>
    );



}

export default ArtistBio