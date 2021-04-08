import React, { useState, useEffect } from "react";
import logo from "../img/icon.png"
import {fetchAudiodbArtist} from '../api/index'

const ArtistsThumbImg = (props) => {
    const [artistImg, setArtistImg] = useState(null);
    let artist_name = props.name.replace(" ", "%20");

    useEffect(() => {
        fetchAudiodbArtist(artist_name).then((res)=>{
            if (res.data['artists'] !== null ){
                setArtistImg(res.data['artists']['0'].strArtistThumb)
            }
        });
    }, [artist_name])


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