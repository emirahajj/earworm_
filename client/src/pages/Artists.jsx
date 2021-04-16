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

    const [searchLetters, setSearchLetters] = useState('');

    return (
        <div>
            <Navbar />

            <input 
            className="flex mx-auto w-1/4 mt-14 mb-4 p-4 bg-search"
            type="text" 
            placeholder="Search Artist"
            onChange={(e) => {
                setSearchLetters(e.target.value); //value of searchbar
                //console.log(searchLetters);
            }}
            />

            <div className="flex justify-center fade-in pb-8">
                <h2 className="flex justify-center text-center bg-dark w-2/5 h-14 mt-10 pt-4 rounded-full font-bold">These are some artists: </h2>
            </div>
            {
                (artists ?
                    <div className="flex justify-center">
                        <div className="justify-center container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 fade-in">
                            {
                                artists.filter((val) => {
                                    if (searchLetters == "") {
                                        return val.name
                                    } else if (val.name.toLowerCase().includes(searchLetters.toLowerCase())) {
                                        return val.name
                                    }
                                }).map((artist, index) => {
                                    console.log(artist);
                                    return <ArtistsThumb key={index} name={artist.name} id={artist._id} />;
                                })
                            }
                        </div>
                    </div>
                    :
                    <h3 className="text-center">No Results</h3>
                )
            }
        </div>
    );




}

export default Artists;

