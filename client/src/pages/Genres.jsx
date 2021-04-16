import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar"
import fetchData, { fetchGenres } from '../api/index';
import "../App.css";
//import SearchBar from "../components/SearchBar.jsx"
import GenreThumb from "../components/GenreThumb.jsx";
// if (val.includes(searchLetters)) 
const Genres = () => {

    const [genres, setGenres] = useState(null); //genres is an array who is returned when the states changes.
    //setGenres function make the change of hook state.
    useEffect(() => {
        fetchGenres().then((result) => {   //Fetch data by resolving a promise and store the resolved results in "result"
            setGenres(result.data)       //When the stat changes from null, genres will get the result.data value.
        });                              //data comng from the API as an array of objects.
    }, [])                               //nothing to mount.

    const [searchLetters, setSearchLetters] = useState('');

    return (
        <div>
            <Navbar />
            <input 
            className="flex mx-auto w-1/4 mt-14 mb-4 p-4 bg-search"
            type="text" 
            placeholder="Search Genre" 
            onChange={(e) => {
                setSearchLetters(e.target.value); //value of searchbar
                console.log(searchLetters);
            }}
            />

            <div className="flex justify-center fade-in pb-8">
                <h2 className="text-center text-md bg-dark w-2/5 h-16 ml-10 mt-10 pt-4 pb-4 rounded-full font-bold sm:text-xl md:text-2xl lg:text-3xl">List of Genres available </h2>
            </div>


            {(genres ?                                                         //If data is fetched via hook,
                <div className="grid grid-cols-2 ml-8 fade-in 
                 xl:grid-cols-6 
                 lg:grid-cols-5
                 md:grid-cols-4
                 sm:grid-cols-3">
                    {genres.filter((val) => {
                        if (searchLetters == "") {
                            return val.name
                        } else if (val.name.toLowerCase().includes(searchLetters.toLowerCase())) {
                            return val.name
                        }
                    }).map((genre, index) => {
                        //console.log(genre);                          //genre = currentElement, index = this
                        return <GenreThumb key={index} genre={genre.name} />;  //props.genre == genre.name(genre being cE and name the object)
                    })
                    }
                </div>
                :
                <h3 className="text-center">No Results</h3>                     //no change of state. Means no data fetched.
            )}
        </div>
    );
}

export default Genres;





// import React from "react";
// import Circles from "../components/Circles.jsx";
// import Navbar from "../components/Navbar"
// //import "./styles/main.css";

// const Genres = () => {
//   return (
//     <div className="ml-10">
//         <Navbar />
//       <h1 className="text-4xl font-bold my-10 text-center">List of Genres</h1>
//       <Circles />
//     </div>
//   );
// }

// export default Genres;

