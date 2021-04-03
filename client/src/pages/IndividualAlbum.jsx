import React from "react";
import Navbar from "../components/Navbar"
import {useState, useEffect} from 'react'
import {fetchAlbum, fetchArtist} from '../api/index'
import AlbumModal from '../components/AlbumModal'

const IndividualAlbum = ({match:{params:{albumId}}}) => {
   const [artistName, setArtistName] = useState(" ");
   const [albumName, setAlbumName] = useState(" ");
   const [genre, setGenre] = useState(" ");
   const [date, setDate] = useState(0);
   const [image, setImage] = useState(" ");

   useEffect(()=>{
       fetchAlbum(albumId).then((res)=>{
           setArtistName(res.data[0].artist);
           setAlbumName(res.data[0].title);
           setGenre(res.data[0].genre);
           setDate(res.data[0].release);
           setImage(res.data[0].img);
       })
   }, []);
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col">
                    <img className="rounded-3xl w-full" src={image} alt=""/>
                    <div className="flex flex-row w-full justify-between">
                        <h1 className="">{albumName}</h1>
                        <h1 className="" >{date}</h1>
                    </div>
                    <h1>{artistName}</h1>
                    <p>brief description here</p>
                </div>

                <div className="">
                    <div>
                        <h1>Spotify widget goes here</h1>
                    </div>
                    
                    <div>
                        <h1>More albums by {artistName}: </h1>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default IndividualAlbum;

