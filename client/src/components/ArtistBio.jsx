import React, { useState, useEffect } from "react";
import {fetchAudiodbArtist} from '../api/index'


const ArtistBio = (props) => {
    const [artistBio, setArtistBio] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    let artist_name = props.name.replace(" ", "%20");
    useEffect(() => {
        fetchAudiodbArtist(artist_name).then((res)=>{
            if (res.data['artists'] !== null ){
                setArtistBio(res.data['artists']['0'].strBiographyEN)
            }
        });
    }, [artist_name])


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