import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { fetchArtistsLetter, fetchToken } from '../api/index';
import ArtistsThumbnail from "../components/ArtistsThumbnail";
import LoadingRing from "../components/LoadingRing"
import Navbar from '../components/Navbar';
import "../App.css";


const Artists = ({letter, artistLetterChange}) => {
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
            var element = document.getElementById(letters)
            element.scrollIntoView({behavior: "smooth"})
        })
    }, [letters])

    const onLetterChange = (temp_letter) => {
        if (temp_letter !== letters) {
            setLetters(temp_letter);
            setArtists(null);
            artistLetterChange(temp_letter)

        } else {
            setLetters("!")
        }
    }

    return (
        <div className="p-12">
                <ul className="flex flex-col justify-center pb-3 fade-in">
                    {
                        alphabet.map((temp_letter, index) => {
                            return <div id={temp_letter} >
                                        <p className={`text-8xl font-bold ${temp_letter !== letters ? " opacity-20" : ""}`} onClick={() => onLetterChange(temp_letter)}>{temp_letter}</p>
                                        <hr />
                                        {
                                            (artists &&
                                                <div className={`flex ${temp_letter !== letters ? "hidden" : ""}`}>
                                                    <div className="grid grid-cols-3 gap-y-4 fade-in">
                                                        {
                                                            artists.map((artist, index) => {
                                                                return <ArtistsThumbnail key={index} name={artist.name} id={artist._id} token={token} image={artist.image} />;
                                                            })
                                                        }
                                                    </div>
                                                </div>

                                            )
                                        }
                            </div>
                        })
                    }
                </ul>
            {/* <nav>
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
            </nav> */}


        </div>
    );
}

export default Artists;