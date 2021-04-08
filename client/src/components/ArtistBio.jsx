import React, { useState, useEffect } from "react";
import {fetchAudiodbArtist} from '../api/index'

import Collapse from "@material-ui/core/Collapse"

const ArtistBio = (props) => {
    const [artistBio, setArtistBio] = useState(null);
    const [open, setOpen] = useState(false);

    let artist_name = props.name.replace(" ", "%20");
    useEffect(() => {
        fetchAudiodbArtist(artist_name).then((res)=>{
            if (res.data['artists'] !== null ){
                setArtistBio(res.data['artists']['0'].strBiographyEN)
            }
        });
    }, [artist_name])



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