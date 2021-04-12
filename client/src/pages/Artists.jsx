import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import { fetchArtists } from '../api/index';
import "../App.css";
import ArtistsThumb from "../components/ArtistsThumb";

const Artists = () => {
    const [artists, setArtists] = useState(null);

    useEffect(() => {
        fetchArtists().then((result) => {
            setArtists(result.data)
        });
    }, [])

    return (
        <div>
            <Navbar />
            <div className="flex justify-center fade-in pb-8">
                <h2 className="flex justify-center text-center bg-dark w-2/5 h-14 mt-10 pt-4 rounded-full font-bold">These are some artists: </h2>
            </div>
            {
                (artists ?
                    <div className="flex justify-center container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 fade-in">
                        {
                            artists.map((artist, index) => {
                                console.log(artist);
                                return <ArtistsThumb key={index} name={artist.name} id={artist._id} />;
                            })
                        }
                    </div>
                    :
                    <h3 className="text-center">No Results</h3>
                )
            }
        </div>
    );




}

export default Artists;

