import React, { useState, useEffect } from "react";
import { fetchAudiodbArtist } from '../api/index'
import Collapse from "@material-ui/core/Collapse"
import LoadingRing from "../components/LoadingRing"

const ArtistBio = (props) => {
    const [artistBio, setArtistBio] = useState(null);
    const [open, setOpen] = useState(false);


    let artist_name = props.name.replace(" ", "%20");
    useEffect(() => {
        fetchAudiodbArtist(artist_name).then((res) => {
            if (res.data['artists'] !== null) {
                setArtistBio(res.data['artists']['0'].strBiographyEN)
                console.log(res.data['artists']['0'].strBiographyEN.length)
            }
        });
    }, [artist_name])

    return (
        <div>
            {
                (artistBio ?
                    <div class="flex flex-col">
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
                        <LoadingRing />
                        <p className="mx-3">Loading</p>
                    </div>

                )

            }
        </div>
    );
}

export default ArtistBio