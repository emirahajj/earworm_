import React, { useState, useEffect } from "react";
import placeholder from "../img/placeholder-dark.png"
import { fetchAudiodbArtist } from '../api/index'
import "../App.css"

const ArtistsThumbImg = (props) => {
    const [artistImg, setArtistImg] = useState(null);
    let artist_name = props.name.replace(" ", "%20");

    useEffect(() => {
        fetchAudiodbArtist(artist_name).then((res) => {
            if (res.data['artists'] !== null) {
                setArtistImg(res.data['artists']['0'].strArtistThumb)
            }
        });
    }, [artist_name])


    return (
        <div>
            {(artistImg ?
                <img className="fade-in" src={artistImg} alt="N/A"></img>
                :
                <img className="h-full" src={placeholder} alt="Artist Cover"></img>
            )}
        </div>
    );



}

export default ArtistsThumbImg