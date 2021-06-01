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

    const handleCheck = (e) => {
        setArtistQuery(e.target.checked);
    }

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
        <div>
            <Switch 
                checked={isArtistQuery} 
                onChange={handleCheck}
                color = 'primary'            
                ></Switch>
            <input 
                className="bg-search focus:outline-none" 
                type="text" 
                placeholder= {isArtistQuery ? "Search by Artist" : "Search by Album"}
                onChange={changeQuery}
                >
            </input>
            <SearchResults results={matches} type={isArtistQuery? "artist" : "album"}/>
        </div>
    );
}

export default Search;