import { useState, useEffect } from 'react'
import { fetchArtist } from '../api/index'
import placeholder from "../img/placeholder-dark.png"

const ImageWithOverlay = ({source, rank, type}) => {

    const [artistImage, setArtistImage] = useState(" ")
    const [style, setStyle] = useState("")

    useEffect(() => {
        if (type === "artist"){
            fetchArtist(source.replace(' ', '%20')).then((res) => {
            if (res.data[0]) {
                setArtistImage(res.data[0].image)
            } else {
                setArtistImage("N/A");
            }
        })}
    }, [source]);

    return (
        <div className="relative w-28 h-28">
            <img
            src={source === "N/A" ? placeholder : type === "album" ? source : artistImage}
            alt="Album Cover"
            className="w-full h-full absolute rounded-2xl overflow-hidden shadow-md object-cover transition duration-500 ease-in-out transform hover:scale-110" />
            <div className={`absolute w-full rounded-2xl h-full bg-gradient-to-b from-transparent to-black`}>
                <h1 className="text-3xl font-bold absolute bottom-1 left-3">{rank}</h1>
            </div>
        </div>
    );
}
export default ImageWithOverlay;

