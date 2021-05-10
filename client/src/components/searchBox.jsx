import React, { useState, useEffect, useRef } from "react";
import { fetchArtistsLetter } from '../api/index';
import LoadingRing from "../components/LoadingRing";
import SuggestedList from "./SuggestedList";

const SearchBox = () => {

    //const [characters, setCharacters] = useState(''); //characters typed in the searchbox
    const [inputCharacters, setInputCharacters] = useState('');
    //const [wrapperRef] = useRef(null); 
    const [suggestedArtists, setSuggestedArtists] = useState(null);                             //wrapper
    // const [display, setDisplay] = useState("false");    

    useEffect(() => {
        fetchArtistsLetter(inputCharacters).then((res) => {
            setSuggestedArtists(res.data);                   //gets the first letter(s) of names. 
        });
    }, [inputCharacters])                                   //whenever a character is typed, useEffect is called.

    // useEffect(() => {
    //     window.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //       window.removeEventListener("mousedown", handleClickOutside);
    //     };
    //   });
    
    //   const handleClickOutside = event => {
    //     const { current: wrap } = wrapperRef;
    //     if (wrap && !wrap.contains(event.target)) {
    //       setDisplay(false);
    //     }
    //   };

    return(
        <div>
            <input
                className="flex justify-end w-96 p-4 bg-search mt-4 mx-14 focus:outline-none"
                type="text"
                placeholder="Search Artist"
                onChange={(e) => {

                    setInputCharacters(e.target.value);
                    //console.log(inputCharacters);
                    //console.log(suggestedArtists);
                }
            }
            />

            {
                (suggestedArtists ?
                    <div className="flex justify-start fixed z-10">
                        <div className="justify-start container grid grid-cols-1 fade-in w-96 mx-14">
                            {
                                suggestedArtists.slice(0,10).map((suggestedArtist, index) => {
                                    return <SuggestedList key={index} name={suggestedArtist.name} id={suggestedArtist.id} />;
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

export default SearchBox;