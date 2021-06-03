import React, { useState, useEffect } from "react";
import { fetchArtistsLetter, fetchAlbumsLetter } from '../api/index';
import Switch from '@material-ui/core/Switch'
import SearchResults from './SearchResults'

const Search = () => {
    const [query, setQuery] = useState('');
    const [matches, setMatches ] = useState([]);
    const [isArtistQuery, setArtistQuery] = useState(true);

    const changeQuery = (e) => {
        setQuery(e.target.value);
    }

    const show = (e) => {
        let searchBox = document.getElementsByClassName('search');
        window.onclick = (f) => {
            console.log(f.target)
            if (f.target.id === 'input' || f.target.id === "switch"){
                searchBox[0].classList.remove("hidden")
                searchBox[1].classList.remove("hidden")
            } else {
                searchBox[0].classList.add("hidden")
                searchBox[1].classList.add("hidden")
            }
        }
    }

    const handleCheck = (e) => {
        setArtistQuery(e.target.checked);
    }
    //focus on the div that pops up so that you can just add the onBlur to that component
    useEffect(() => {
        if(query !== ''){
            if (isArtistQuery){
                fetchArtistsLetter(query).then((res) => {
                    setMatches(res.data); 
                });
            } else {
                fetchAlbumsLetter(query).then((res) => {
                    setMatches(res.data);
                });
            }
        }
        else {
            setMatches([]);
        }
    }, [isArtistQuery, query])

    return(
        <div onBlur={show} onFocus={show} className="mt-4 md:mt-0 md:px-3 md:pt-2">
            <h1 className="text-center">Search by {isArtistQuery ? "Artist": "Album"}</h1>
            <div className = "flex sm:flex-row justify-center w-60 md:w-80">
                <input
                    className="bg-search w-full h-9 focus:outline-none"
                    type="search"
                    id="input"
                    placeholder= {isArtistQuery ? "eg. 'Lady Gaga'" : "eg. 'Chromatica'"}
                    onChange={changeQuery}>
                </input>
                <Switch
                    id="switch"
                    checked={isArtistQuery}
                    onChange={handleCheck}
                    color = 'primary'> 
                </Switch>
                <SearchResults results={matches} type={isArtistQuery? "artist" : "album"} />

            </div>
        </div>
    );
}

export default Search;