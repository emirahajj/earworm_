import React from "react";
import Navbar from "../components/Navbar"
import { useState, useEffect } from 'react'
import { fetchArtist } from '../api/index'
import AlbumModal from '../components/AlbumModal'
import ArtistsThumbImg from "../components/ArtistsThumbImg"
import ArtistsBio from "../components/ArtistBio"
import { Link } from "react-router-dom";
import "../App.css"

const IndividualArtist = ({ match: { params: { artist_name } } }) => {

    const [artistName, setArtistName] = useState(" ");
    const [albumIdArray, setAlbumIdArray] = useState([]);
    const [genreArray, setGenreArray] = useState([]);

    useEffect(() => {
        fetchArtist(artist_name.replace('-', '%20')).then((res) => {
            setArtistName(res.data[0].name);
            setAlbumIdArray(res.data[0].albums);
            setGenreArray(res.data[0].genres);
        })
    }, [artist_name]);
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-6 fade-in">
                <div className="flex flex-col mx-4 lg:col-span-4">
                    <div className="flex flex-row">
                        <div className="flex-none w-72 h-72 rounded-full overflow-hidden shadow-md ml-12">
                            <ArtistsThumbImg name={artistName} />
                        </div>

                        <div className="ml-4">
                            <h1 className="text-3xl font-bold">{artistName}</h1>
                            <h2 className="text-xl"> {genreArray.map((genre, i) =>
                                (i === genreArray.length - 1) ? <Link to={"/genres/" + genre}>{genre}</Link> : <Link to={"/genres/" + genre}>{genre + ', '}</Link>
                            )}</h2>
                            <br />
                            <ArtistsBio name={artistName} />
                        </div>

                        {  /*<div className="flex flex-row justify-center mt-6 ml-12">                                      </div>*/}




                    </div>




                    <div className="flex justify-center mt-6">
                        <div>
                            <h1 className="text-4xl font-bold mb-5">Albums</h1>
                            <div className="grid grid-cols-4 gap-5">
                                {albumIdArray.map((album) => <AlbumModal id={album} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 mx-5">
                    <p>{artistName} has {albumIdArray.length} albums on the Billboard 200 End of Year charts. </p>

                </div>
            </div>
        </div >
    );
}

export default IndividualArtist;

