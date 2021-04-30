import React, { useState, useEffect } from "react";
import { fetchArtistsLetter, fetchToken } from '../api/index';
import "../App.css";
import ArtistsThumbnail from "../components/ArtistsThumbnail";
import LoadingRing from "../components/LoadingRing"

const Artists = () => {
    const [letters, setLetters] = useState('A');
    const [artists, setArtists] = useState(null);
    const [searchLetters, setSearchLetters] = useState('');
    const [token, setToken] = useState('');

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    useEffect(() => {
        fetchToken().then((res) => {
            console.log(letters + " has the following token: " + res.data.body["access_token"])
            setToken(res.data.body["access_token"])
        })
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchArtistsLetter(letters).then((result) => {
                setArtists(result.data)
            })
        }, 2500);
        return () => clearTimeout(timer);
    }, [letters])

    const onLetterChange = (letter) => {
        if (letter !== letters) {
            setLetters(letter);
            setArtists(null);
        }
    }

    return (
        <div>

            <div className="flex justify-center fade-in pb-6">
                <h2 className="flex justify-center text-center bg-dark w-3/5 h-14 mt-10 pt-4 rounded-full font-bold">Browse through some of your favorite artists: </h2>
            </div>

            <nav>
                <ul className="flex justify-center pb-12 fade-in">
                    {
                        alphabet.map((letter, index) => {
                            return <button
                                className={"py-2 px-1.5 md:px-2 lg:px-3 xl:px-4 rounded-full transition duration-500 ease-in-out font-bold" + (letter === letters ? 'outline-none focus:outline-none bg-dark shadow-md' : 'outline-none focus:outline-none hover:bg-dark hover:shadow-md')}
                                key={index}
                                onClick={() => (onLetterChange(letter))}
                            >{letter}</button>
                        })
                    }
                </ul>
            </nav>

            { // make component here for placeholder if user doesn't stay on tab for 3 sec
                (artists ?
                    <div className="flex justify-center">
                        <div className="justify-center container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 fade-in">
                            {
                                artists.map((artist, index) => {
                                    return <ArtistsThumbnail key={index} name={artist.name} id={artist._id} token={token} />;
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
        </div >
    );
}

export default Artists;