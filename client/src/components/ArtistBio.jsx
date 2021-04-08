import React, { useState, useEffect } from "react";
import Collapse from "@material-ui/core/Collapse"

const ArtistBio = (props) => {
    const [artistBio, setArtistBio] = useState(null);
    const [open, setOpen] = useState(false);

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
                    //Retrieving biography from audiodb 
                    setArtistBio(jsonResponse['artists']['0'].strBiographyEN)
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, [artist_url])


    return (
        <div>
            {
                (artistBio ?

                    <div class="flex flex-col">
                        <Collapse collapsedHeight={220} in={open}>
                            {
                                <p className="text-justify">{artistBio}</p>
                            }
                        </Collapse>
                        <p className=" text-gray-400 text-right inline font-bold" onClick={() => setOpen(!open)} variant="custom"
                            aria-controls="drop"
                            aria-expanded={open}>{open ? "See Less..." : "See More..."}
                        </p>
                    </div>

                    :
                    <p> Bio Not Available</p>


                )
            }
        </div>
    );
}

export default ArtistBio