import React, { useState, useEffect } from "react";
import { fetchArtistsLetter, fetchAlbumsLetter } from '../api/index';
import Switch from '@material-ui/core/Switch'
import SearchResults from './SearchResults'

const Search = () => {

    const [query, setQuery] = useState('');
    const [matches, setMatches ] = useState([]);
    const [isArtistQuery, setArtistQuery] = useState(true);

    useEffect(() => {
        if(query !== ''){
            if (isArtistQuery){
                fetchArtistsLetter(query).then((res) => {
                    setMatches(res.data);
                    console.log(res.data)                   //gets the first letter(s) of names. 
                });
            } else {
                fetchAlbumsLetter(query).then((res) => {
                    setMatches(res.data);
                    console.log(res.data)                   //gets the first letter(s) of names. 
                    //gets the first letter(s) of names. 
                });
            }
        }
    }, [isArtistQuery, query])


    const changeQuery = (e) => {
        setQuery(e.target.value);
    }

    const handleCheck = (e) => {
        setArtistQuery(e.target.checked);
    }


    return(
        <div>
            <Switch checked={isArtistQuery} onChange={handleCheck}></Switch>
            <input 
                className="bg-search" 
                type="text" 
                placeholder= {isArtistQuery ? "Search by Artist" : "Search by Album"}
                onChange={changeQuery}>
            </input>
            <SearchResults results={matches} type={isArtistQuery? "artist" : "album"}/>
        </div>
    );
}

export default Search;