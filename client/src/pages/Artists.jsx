import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import { fetchArtistsLetter } from '../api/index';
import "../App.css";
import ArtistsThumb from "../components/ArtistsThumb";


const Artists = () => {
    const [letters, setLetters] = useState('A');
    const [artists, setArtists] = useState(null);
    const [searchLetters, setSearchLetters] = useState('');

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


    useEffect(() => {
        fetchArtistsLetter(letters).then((result) => {
            setArtists(result.data)
        });
    }, [letters])

    const onLetterChange = (letter) => {
        setLetters(letter);
        setArtists(null);
    }


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

            <div className="flex justify-center fade-in pb-6">
                <h2 className="flex justify-center text-center bg-dark w-2/5 h-14 mt-10 pt-4 rounded-full font-bold">Browse through some of your favorite artists: </h2>
            </div>

            <nav>
                <ul className="flex justify-center space-x-1.5 font-bold pb-12 fade-in">
                    {
                        alphabet.map((letter, index) => {
                            return <button
                                className="py-2 px-4 rounded-full transition duration-500 ease-in-out focus:outline-none hover:bg-black"
                                key={index}
                                onClick={() => onLetterChange(letter)}
                            >{letter}</button>
                        })
                    }
                </ul>
            </nav>
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
                                    return <ArtistsThumb key={index} name={artist.name} id={artist._id} />;
                                })
                            }
                        </div>
                    </div>
                    :
                    <h3 className="text-center">No Results</h3>
                )
            }
        </div >
    );




}

export default Artists;

