import React from "react";
import Navbar from "../components/Navbar"
import {useState, useEffect} from 'react'
import {fetchAlbum, fetchArtist, fetchToken} from '../api/index'
import AlbumModal from '../components/AlbumModal'
import SpotifyWebApi from 'spotify-web-api-js'




const IndividualAlbum = ({match:{params:{albumId}}}, props) => {

//    const [artistObj, setArtistObj] = useState({
//        name: 
//    }) 

   const [artistName, setArtistName] = useState(" ");
   const [albumName, setAlbumName] = useState(" ");
   const [genre, setGenre] = useState(" ");
   const [date, setDate] = useState(0);
   const [image, setImage] = useState(" ");
   const [spotifyID, setSpotifyID] = useState("");
   const [awards, setAwards] = useState([]);

   useEffect(()=>{
       fetchAlbum(albumId).then((res)=>{
           let object = res.data[0];
           setArtistName(object.artist);
           setAlbumName(object.title);
           setGenre(object.genre);
           setDate(object.release);
           setImage(object.img);
           setAwards(object.awards);
           console.log(object)

           fetchToken().then((res)=> {
            let spotify = new SpotifyWebApi();
            spotify.setAccessToken(res.data.body["access_token"]);
            console.log(res.data.body["access_token"])
            spotify.searchAlbums(`${object.title}, ${object.artist}`).then((data)=>{
                console.log(data);
                //
                setSpotifyID('https://open.spotify.com/embed/album/' + data.albums.items[0].id);
            }).catch((err)=>{
                console.log(err);
            })
        })
       })
   }, [albumId]);

   
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-7">
                <div className="album-side col-span-3 ml-10 flex flex-col">
                    <img className="rounded-3xl w-auto" src={image} alt=""/>
                    <div className="flex flex-row w-full mt-3 justify-between">
                        <h1 className="text-5xl font-bold">{albumName}</h1>
                        <span>
                        <h1 className="text-4xl font-light" >{date}</h1>
                        </span>
                    </div>
                    <h1 className="text-2xl mt-1 text-gray-400">{artistName}</h1>
                    <p>brief description here</p>
                    {awards.length > 0 ?  
                    <p>{albumName} garnered {awards.length} Grammy's for {artistName}</p> : <p></p>
                    }
                </div>

                <div className="spotify-side col-span-4">
                    <div className= "flex justify-center">
                    {spotifyID !== "" ? 
                        (<iframe src={spotifyID} width="392" height="472" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>)
                        : (<p></p>)
                    }
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

