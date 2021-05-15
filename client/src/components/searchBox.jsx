import React, { useState, useEffect, useRef } from "react";
import { fetchArtistsLetter, fetchAlbumsLetter } from '../api/index';
import LoadingRing from "../components/LoadingRing";
import SuggestedList from "./SuggestedList";
import AlbumSuggestions from "./AlbumSuggestions";

const SearchBox = () => {

    const [inputCharacters, setInputCharacters] = useState('');
    //const [wrapperRef] = useRef(null); 
    const [suggestedArtists, setSuggestedArtists] = useState(null);                             //wrapper
    const [display, setDisplay] = useState("false");    
    const [suggestedAlbums, setSuggestedAlbums] = useState(null);
    const [showAlbums, setShowAlbums]= useState("false"); //ttrue when clicked

    useEffect(() => {
        fetchArtistsLetter(inputCharacters).then((res) => {
            setSuggestedArtists(res.data);                   //gets the first letter(s) of names. 
        });
    }, [inputCharacters])                                   //whenever a character is typed, useEffect is called.

    useEffect(() => {
        fetchAlbumsLetter(inputCharacters).then((res) => {
            setSuggestedAlbums(res.data);
        });
    }, [inputCharacters])


    return(
        <div>
            <input
                className="flex justify-end w-96 p-4 bg-search mt-4 mx-14 focus:outline-none"
                type="text"
                placeholder="Search"
                onClick = {() => {setDisplay(!display)}}
                onChange={(e) => {

                    setInputCharacters(e.target.value);
                    console.log(suggestedAlbums);
                }
            }
            />

            <input 
                type="checkbox" 
                onClick = {() => {setShowAlbums(!showAlbums)}}
            />

            {
                (suggestedArtists && showAlbums ?
                    <div className="flex justify-start fixed z-10">
                        <div className="justify-start container grid grid-cols-1 fade-in w-96 mx-14">
                            {
                                suggestedArtists.slice(0,10).map((suggestedArtist, index) => {
                                    return <SuggestedList key={index} name={suggestedArtist.name} id={suggestedArtist._id} />;
                                })
                            }
                        </div>
                    </div>
                    : suggestedAlbums && !showAlbums ?
                    <div className="flex justify-start fixed z-10">
                        <div className="justify-start container grid grid-cols-1 fade-in w-96 mx-14">
                            {
                                suggestedAlbums.slice(0,10).map((suggestedAlbum, index) => {
                                    return <AlbumSuggestions key={index} name={suggestedAlbum.title} id={suggestedAlbum._id} />;
                                })
                            }
                        </div>
                    </div>
                    : 
                    <div className="flex justify-start fixed z-10">
                        <div className="justify-start container grid grid-cols-1 fade-in w-96 mx-14">
                            No results found
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default SearchBox;