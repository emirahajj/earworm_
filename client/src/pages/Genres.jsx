import React, { useState, useEffect } from "react";
import  { fetchGenres } from '../api/index';
import "../App.css";
import GenreThumb from "../components/GenreThumb.jsx";
import Navbar from '../components/Navbar';
const Genres = () => {

    const [genres, setGenres] = useState(null); //genres is an array who is returned when the states changes.
    //setGenres function make the change of hook state.
    useEffect(() => {
        fetchGenres().then((result) => {   //Fetch data by resolving a promise and store the resolved results in "result"
            setGenres(result.data)       //When the stat changes from null, genres will get the result.data value.
        });                              //data comng from the API as an array of objects.
    }, [])                               //nothing to mount.

    return (
        <div>
            <Navbar />
            <div className="flex justify-center fade-in pb-8">
                <h2 className="text-center text-md bg-dark w-2/5 h-16 ml-10 mt-10 pt-4 pb-4 rounded-full font-bold sm:text-xl md:text-2xl lg:text-3xl">List of Genres available </h2>
            </div>

            {(genres ?                                                         //If data is fetched via hook,
                <div className="grid grid-cols-2 ml-8 fade-in 
                 xl:grid-cols-6 
                 lg:grid-cols-5
                 md:grid-cols-4
                 sm:grid-cols-3">
                    {genres.map((genre, index) => {
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


