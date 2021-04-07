import React, { useState, useEffect } from "react";


const ArtistBio = (props) => {
    const [artistBio, setArtistBio] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

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
                    setArtistBio(jsonResponse['artists']['0'].strBiographyEN)
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, [artist_url])


    return (
        <div className="collapsible">
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>Toggle</button>
            {isOpen &&
                <div className="content">
                    {(artistBio ?
                        <p className="text-justify">{artistBio}</p>
                        :
                        <p> Bio Not Available</p>
                    )}
                </div>}
        </div>
    );



}

export default ArtistBio