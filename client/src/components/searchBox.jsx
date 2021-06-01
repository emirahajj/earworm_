import React, { useState, useEffect } from "react";
import { fetchArtistsLetter, fetchAlbumsLetter } from '../api/index';
import SuggestedList from "./SuggestedList";
import AlbumSuggestions from "./AlbumSuggestions";

const SearchBox = () => {

    const [inputCharacters, setInputCharacters] = useState('');
    const [suggestedArtists, setSuggestedArtists] = useState(null);                             
    const [suggestedAlbums, setSuggestedAlbums] = useState(null);
    const [showAlbums, setShowAlbums]= useState(false); 
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        if (!showAlbums) {
            fetchArtistsLetter(inputCharacters).then((res) => {
                setSuggestedArtists(res.data);                   //gets the first letter(s) of names. 
            });
        } else{
            fetchAlbumsLetter(inputCharacters).then((res) => {
                setSuggestedAlbums(res.data);
            });
        }
    }, [inputCharacters, showAlbums])                                   //whenever a character is typed, useEffect is called.


    return(
        <div onFocus={() => setShowList(true)} className="w-96">
            <div>
                <input
                    className="w-full p-4 bg-search mt-4 focus:outline-none"
                    type="text"
                    placeholder="Search by Artist"
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
                        className="pl-3">Search by album
                     </label>
                </div>
            </div>


            <div className="flex justify-start absolute z-10">
                <div className="justify-start container grid grid-cols-1 fade-in w-96 mx-14">
                    {suggestedArtists && !showAlbums && showList ? 
                        <>
                            {
                                suggestedArtists.slice(0,10).map((suggestedArtist, index) => {
                                    return <SuggestedList onClickItem = {setShowList} key={index} name={suggestedArtist.name} genres={suggestedArtist.genres} id={suggestedArtist._id} />;
                                })
                            }
                        </> 
                        : suggestedAlbums && showAlbums && showList ?
                        <>
                            {
                                suggestedAlbums.slice(0,10).map((suggestedAlbum, index) => {
                                    return <AlbumSuggestions key={index} title={suggestedAlbum.title} artist={suggestedAlbum.artist} id={suggestedAlbum._id} />;
                                })
                            }
                        </> 
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchBox;