import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { fetchArtistsLetter, fetchToken } from '../api/index';
import "../App.css";
import ArtistsThumbnail from "../components/ArtistsThumbnail";
import LoadingRing from "../components/LoadingRing"
import Navbar from '../components/Navbar';

const Artists = ({ match: { params: { letter } } }) => {
    const [letters, setLetters] = useState(letter);
    const [artists, setArtists] = useState(null);
    const [token, setToken] = useState('');

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

    useEffect(() => {
        fetchToken().then((res) => {
            console.log(letters + " has the following token: " + res.data.body["access_token"])
            setToken(res.data.body["access_token"])
        })
        fetchArtistsLetter(letters).then((result) => {
            setArtists(result.data)
            
        })
    }, [letters])

    const onLetterChange = (temp_letter) => {
        if (temp_letter !== letters) {
            setLetters(temp_letter);
            setArtists(null);

        }
    }

    return (
        <div>
            <Navbar />
            <div className="flex justify-center fade-in pb-6">
                <h2 className="flex justify-center text-center bg-dark w-3/5 h-14 mt-10 pt-4 rounded-full font-bold">Browse through some of your favorite artists: </h2>
            </div>

            <nav>
                <ul className="flex justify-center pb-3 fade-in">
                    {
                        alphabet.map((temp_letter, index) => {
                            return <Link
                                key={index}
                                className={"py-2 px-1.5 md:px-2 lg:px-3 xl:px-4 rounded-full transition duration-500 ease-in-out font-bold" + (temp_letter === letters ? 'outline-none focus:outline-none bg-dark shadow-md' : 'outline-none focus:outline-none hover:bg-dark hover:shadow-md hover:scale-110')}
                                onClick={() => onLetterChange(temp_letter)}
                                to={"/artists/" + temp_letter}
                            >{temp_letter}</Link>
                        })
                    }
                </ul>
            </nav>
            <nav>
                <ul className="flex justify-center pb-12 fade-in">
                    {
                        numbers.map((temp_letter, index) => {
                            return <Link
                                key={index}
                                className={"py-2 px-1.5 md:px-2 lg:px-3 xl:px-4 rounded-full transition duration-500 ease-in-out font-bold" + (temp_letter === letters ? 'outline-none focus:outline-none bg-dark shadow-md' : 'outline-none focus:outline-none hover:bg-dark hover:shadow-md hover:scale-110')}
                                onClick={() => onLetterChange(temp_letter)}
                                to={"/artists/" + temp_letter}
                            >{temp_letter}</Link>
                        })
                    }
                </ul>
            </nav>

            {
                (artists ?
                    <div className="flex justify-center">
                        <div className="justify-center container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 fade-in">
                            {
                                artists.map((artist, index) => {
                                    console.log(artists.length)
                                    return <ArtistsThumbnail key={index} name={artist.name} id={artist._id} token={token} image={artist.image} />;
                                })
                            }
                        </div>
                    </div>
                    :
                    <div className="flex flex-row mt-10 justify-center font-bold text-gray-300 items-center">
                        <LoadingRing />
                        <p className="mx-3">Loading</p>
                    </div>
                )
            }
        </div>
    );
}

export default Artists;