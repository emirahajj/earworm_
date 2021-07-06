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
        <div className="relative w-36 h-36 transform hover:scale-110 transition duration-500">
            <img src={artistImage === "N/A" ? placeholder : artistImage} 
            alt="Album Cover" 
            className="absolute w-36 h-36 overflow-hidden rounded-3xl shadow-md object-cover" />
            <div className={`opacity-0 transition duration-500 ease-in hover:opacity-100 absolute w-full rounded-2xl h-full bg-gradient-to-b from-transparent to-black`}>
                <h1 className="text-2xl font-bold absolute bottom-1 left-3">{name}</h1>
            </div>
        </div>
    )
}

export default ArtistImage
