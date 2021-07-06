import { useState, useEffect } from 'react'
import { fetchArtist } from '../api/index'
import placeholder from "../img/placeholder-dark.png"

const ArtistImage = ({ name }) => {

    const [artistImage, setArtistImage] = useState(" ")

    useEffect(() => {
        fetchArtist(name.replace(' ', '%20')).then((res) => {
            if (res.data[0]) {
                setArtistImage(res.data[0].image)
            } else {
                setArtistImage("N/A");
            }
        })
    }, [name]);

    return (
        <div>
            <img src={artistImage === "N/A" ? placeholder : artistImage} 
            alt="Album Cover" 
            className="flex-none w-36 h-36 rounded-2xl overflow-hidden shadow-md object-cover transition duration-500 ease-in-out transform hover:scale-110" />
        </div>
    )
}

export default ArtistImage
