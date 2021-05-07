import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar"
import { fetchArtistsLetter, fetchArtist } from '../api/index';
import "../App.css";
import ArtistsThumb from "../components/ArtistsThumb";
import LoadingRing from "../components/LoadingRing";

const Artists = () => {
    const [letters, setLetters] = useState('A');
    const [artists, setArtists] = useState(null);


    //*********latest edition******* */
    // const [display, setDisplay] = useState("false");                 //For clicking the box and outside of it/when to display the results
    // const [storedArtists, setStoredArtists] = useState([]);         //Holder array for API artists data return
    // const [suggestedArtists, setSuggestedArtists] = useState([]);   //Array that would hold the results that would be displayed.
    // const [wrapperRef] = useRef(null);                              //wrapper
    //*******"What does the future hodl?" - Elon Musk */
    var highlight = true;


    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


    useEffect(() => {
        fetchArtistsLetter(letters).then((result) => {
            setArtists(result.data)
        });
    }, [letters])


    // useEffect(() => {
    //     fetchArtist(storedArtists).then((response) => {
    //         setStoredArtists(response.data)                                          //All the values fetched from the APi is stored here.
    //     }); 
        
    //     const artistObjects = new Array(14).fill().map((v,i) => storedArtists[i]);  //artistObjects is a new array of 12 that holds elements of storedArtists. 
   
    //          console.log(artistObjects);
    //          //sconsole.log(autoArtists);
    //          //console.log(storedArtists);
    // }, [])

    console.log(letters);

    const onLetterChange = (letter) => {
        if (letter !== letters) {
            setLetters(letter);
            setArtists(null);
        }
    }

    return (
        <div>
            <Navbar />
            {/* <input
                className="flex mx-auto w-1/4 mt-14 mb-4 p-4 bg-search"
                type="text"
                placeholder="Search Artist"
                onChange={(e) => {
                    setSearchLetters(e.target.value); //value of searchbar
                    console.log(searchLetters);
                }}
            /> */}
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

            {
                (artists ?
                    <div className="flex justify-center">
                        <div className="justify-center container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 fade-in">
                            {
                                artists.map((artist, index) => {
                                    return <ArtistsThumb key={index} name={artist.name} id={artist._id} />;
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