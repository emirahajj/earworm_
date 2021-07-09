import beats from "../img/beats.jpg"
import React from "react";
import { useState, useEffect } from 'react'
import { fetchArtist } from '../api/index'
import AlbumModal from '../components/AlbumModal'
import ArtistCircleImg from "../components/ArtistCircleImg"
import ArtistsBio from "../components/ArtistBio"
import { Link, Redirect } from "react-router-dom";
import Navbar from '../components/Navbar';
import "../App.css"

const ArtistCard = ({artist}) => {
    const [artistName, setArtistName] = useState(" ");
    const [artistImage, setArtistImage] = useState(" ");
    const [albumIdArray, setAlbumIdArray] = useState([]);
    const [genreArray, setGenreArray] = useState([]);

    useEffect(() => {
        fetchArtist(artist).then((res) => {
            if (res.data[0]) {
                setArtistName(res.data[0].name);
                setArtistImage(res.data[0].image)
                setAlbumIdArray(res.data[0].albums);
                setGenreArray(res.data[0].genres);
            } else {
                setArtistName("No match");
            }
        })
    }, [artist]);
    return (
        <div className="p-12 h-full">
            <div className="relative w-full">
                <img src={artistImage} alt="" className="rounded-3xl w-full h-96 object-cover"/>
                <h1 className="absolute bottom-4 left-4 text-6xl font-bold">{artistName}</h1>
            </div>
            <div>
                <ArtistsBio name={artistName} />
                <h1 className="text-center text-2xl font-bold mb-4">{artistName} has {albumIdArray.length} albums on the Billboard 200 Year End Charts</h1>
                <div className="grid xl:grid-cols-6 lg:grid-cols-4 gap-5 mb-6">
                    {albumIdArray.map((album) => <AlbumModal id={album} />)}
                </div>
            </div>
        </div>
    )
}

export default ArtistCard