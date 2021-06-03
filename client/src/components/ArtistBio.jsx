import React, { useState, useEffect } from "react";
import { fetchAudiodbArtist } from '../api/index'
import Collapse from "@material-ui/core/Collapse"

const ArtistBio = (props) => {
    const [artistBio, setArtistBio] = useState(null);
    const [open, setOpen] = useState(false);

    let artist_name = props.name.replace(" ", "%20");
    artist_name = artist_name.replace("/", "|")
    useEffect(() => {
        fetchAudiodbArtist(artist_name).then((res) => {
            if (res.data['artists'] !== null) {
                setArtistBio(res.data['artists']['0'].strBiographyEN)
            }
        });
    }, [artist_name])

    return (
        <div>
            {console.log(artist_name)}
            {
                (artistBio ?
                    <div className="flex flex-col">
                        <Collapse collapsedHeight={220} in={open}>
                            <p className="text-justify fade-in">{artistBio}</p>
                        </Collapse>
                        {
                            (artistBio.length > 820 ?
                                <div className="flex justify-end">
                                    <button className="flex text-gray-400 mt-3 justify-center font-bold bg-dark rounded-full px-3 py-1 focus:outline-none mb-4 w-1/5" onClick={() => setOpen(!open)} variant="custom"
                                        aria-controls="drop"
                                        aria-expanded={open}>{open ? "Less" : "More"}
                                    </button>
                                </div>
                                :
                                <p></p>
                            )
                        }
                    </div>
                    :
                    <div className="flex flex-row mt-10 justify-center font-bold text-gray-300 items-center">
                        <p className="mt-10 text-gray-3  text-2xl text-center">No bio available</p>
                    </div>

                )
            }
        </div>
    );
}

export default ArtistBio