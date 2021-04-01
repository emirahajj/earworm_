import React from "react";
import Navbar from "../components/Navbar"
import {useState, useEffect} from 'react'
import {fetchArtist} from '../api/index'
import AlbumModal from '../components/AlbumModal'

const IndividualArtist = ({match:{params:{artistId}}}) => {
   const [artistName, setArtistName] = useState(" ");
   const [albumIdArray, setAlbumIdArray] = useState([]);
   const [genreArray, setGenreArray] = useState([]);

   useEffect(()=>{
       fetchArtist(artistId).then((res)=>{
           setArtistName(res.data[0].name);
           setAlbumIdArray(res.data[0].albums);
           setGenreArray(res.data[0].genres);
       })
   }, []);
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-6">
                <div className="flex flex-col mx-4 lg:col-span-4">
                    <div className="flex flex-row">
                        <img className= "w-96 rounded-full" src="https://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg" alt=""/>
                        <div className="ml-4">
                            <h1 className="text-3xl font-bold">{artistName}</h1>
                            <h2 className="text-xl"> {genreArray.map((genre, i) => 
                                (i === genreArray.length - 1) ? genre : genre + ', ' 
                            )}</h2>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div>
                            <h1 className="text-4xl font-bold mb-5">Albums</h1>
                            <div className="grid grid-cols-4 gap-5">
                                {albumIdArray.map((album)=> <AlbumModal id= {album}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 mx-5">
                    <p>{artistName} has {albumIdArray.length} albums on the Billboard 200 End of Year charts. </p>
                    
                </div>
            </div>
        </div>
    );
}

export default IndividualArtist;

