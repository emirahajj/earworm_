import React, { useState, useEffect } from "react";

const ArtistsThumbImg = () => {
    const [artistImg, setArtistImg] = useState(null);

    useEffect(() => {
        fetch("https://theaudiodb.p.rapidapi.com/search.php?s=twenty%20one%20pilots", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "<pass>",
                "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
            }
        })
            .then((response) => response.json())
            .then(jsonResponse => {
                setArtistImg(jsonResponse['artists']['0'].strArtistThumb)
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    return (
        <div className="ml-7">
            <img className="flex-none w-24 h-24 rounded-2xl overflow-hidden shadow-md ml-12" src={artistImg} alt="Artist Cover"></img>
        </div>
    );


}

export default ArtistsThumbImg