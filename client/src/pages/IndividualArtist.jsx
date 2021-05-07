import React from "react";
import { useState, useEffect } from 'react'
import { fetchArtist } from '../api/index'
import AlbumModal from '../components/AlbumModal'
import ArtistCircleImg from "../components/ArtistCircleImg"
import ArtistsBio from "../components/ArtistBio"
import { Link, Redirect } from "react-router-dom";
import Navbar from '../components/Navbar';
import "../App.css"

const IndividualArtist = ({ match: { params: { artist_name } } }) => {

    const [artistName, setArtistName] = useState(" ");
    const [artistImage, setArtistImage] = useState(" ");
    const [albumIdArray, setAlbumIdArray] = useState([]);
    const [genreArray, setGenreArray] = useState([]);

    useEffect(() => {
        fetchArtist(artist_name.replace('-', '%20')).then((res) => {
            if (res.data[0]) {
                setArtistName(res.data[0].name);
                setArtistImage(res.data[0].image)
                setAlbumIdArray(res.data[0].albums);
                setGenreArray(res.data[0].genres);
            } else {
                setArtistName("No match");
            }

        })
    }, [artist_name]);
    return (
        (artistName === "No match") ? <Redirect to="/artists" /> :
            <div>
                <Navbar />
                <div className="grid grid-cols-1 lg:grid-cols-5 fade-in">
                    <div className="flex flex-col lg:col-span-4">
                        <div className="flex flex-row mt-10">

                            <ArtistCircleImg name={artistName} image= {artistImage} />

                            <div className=" w-full">
                                <h1 className="text-5xl font-bold">{artistName}</h1>
                                <h2 className="text-xl text-gray-400 font-bold"> {genreArray.map((genre, i) =>
                                    (i === genreArray.length - 1) ? <Link to={"/genres/" + genre}>{genre}</Link> : <Link to={"/genres/" + genre}>{genre + ', '}</Link>
                                )}</h2>
                                <br />
                                <ArtistsBio name={artistName} />
                            </div>

                            {  /*<div className="flex flex-row justify-center mt-6 ml-12">                                      </div>*/}




                        </div>




                        <div className="flex justify-center mt-6 mx-8">

                            <div>
                                <h1 className="text-4xl font-bold mb-1">Albums</h1>
                                <div className="mb-8">
                                    <p>{artistName} has {albumIdArray.length} albums on the Billboard 200 End of Year charts. </p>

                                </div>
                                <div className="grid xl:grid-cols-6 lg:grid-cols-4 gap-5 mb-6">
                                    {albumIdArray.map((album) => <AlbumModal id={album} />
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

    );
}

export default IndividualArtist;

