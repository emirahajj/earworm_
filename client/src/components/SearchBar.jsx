import React, { useState } from "react";
import fetchData, { fetchGenres } from '../api/index';
import "../App.css";

const SearchBar = (props) =>{

    const [searchLetters, setSearchLetters] = useState("");

    return (
        <div>
            <input 
            type="text" 
            placeholder="Search" 
            onChange={(e) => {
                setSearchLetters(e.target.value);
            }}
            />
            {props.page.filter((val) => {
                if(searchLetters == "") {
                    return val
                } else if (val.props.name.toLowerCase().includes(searchLetters.toLowerCase())) {
                    return val
                }
            })}
        </div>
    );
}

export default SearchBar;