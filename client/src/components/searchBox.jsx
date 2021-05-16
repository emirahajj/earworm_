import React, { useState, useEffect, useRef } from "react";
import { fetchArtistsLetter, fetchAlbumsLetter } from '../api/index';
import LoadingRing from "../components/LoadingRing";
import SuggestedList from "./SuggestedList";
import AlbumSuggestions from "./AlbumSuggestions";

const SearchBox = () => {

    const [inputCharacters, setInputCharacters] = useState('');
    const [suggestedArtists, setSuggestedArtists] = useState(null);                             
    const [suggestedAlbums, setSuggestedAlbums] = useState(null);
    const [showAlbums, setShowAlbums]= useState(false); 
    const [showList, setShowList] = useState(false);

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

    let searchRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!searchRef.current.contains(event.target)) {
                setShowList(false);
            }
        };

        document.addEventListener("mousedown", handler);
        
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    });

    return(
        <div ref={searchRef}>
            <input
                className="flex justify-end w-96 p-4 bg-search mt-4 mx-14 focus:outline-none"
                type="text"
                placeholder="Search"
                onClick={() => setShowList((showList) => !showList)}
                onChange={(e) => {
                    setInputCharacters(e.target.value);
                    console.log(suggestedAlbums);
                }
            }
            />

            <div className="flex items-center pt-2 pl-16">
                <input 
                    type="checkbox" 
                    className="w-6 h-6"
                    id="check"
                    onClick = {() => {setShowAlbums(!showAlbums)}}
                />
                <label
                    htmlFor="check" 
                    className="pl-3">Click to search by album
                 </label>
            </div>
            

            {
                (suggestedArtists && !showAlbums && showList?
                    <div className="flex justify-start fixed z-10">
                        <div className="justify-start container grid grid-cols-1 fade-in w-96 mx-14">
                            {
                                suggestedArtists.slice(0,10).map((suggestedArtist, index) => {
                                    return <SuggestedList key={index} name={suggestedArtist.name} genres={suggestedArtist.genres} id={suggestedArtist._id} />;
                                })
                            }
                        </div>
                    </div>
                    : suggestedAlbums && showAlbums && showList?
                    <div className="flex justify-start fixed z-10">
                        <div className="justify-start container grid grid-cols-1 fade-in w-96 mx-14">
                            {
                                suggestedAlbums.slice(0,10).map((suggestedAlbum, index) => {
                                    return <AlbumSuggestions key={index} title={suggestedAlbum.title} artist={suggestedAlbum.artist} id={suggestedAlbum._id} />;
                                })
                            }
                        </div>
                    </div>
                    : 
                    <div className="flex justify-start fixed z-10">
                        <div className="justify-start container grid grid-cols-1 fade-in w-96 mx-14">
                           
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default SearchBox;