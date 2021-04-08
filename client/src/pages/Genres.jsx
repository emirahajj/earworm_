import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import fetchData, { fetchGenres } from '../api/index';
import "../App.css";
import GenreThumb from "../components/GenreThumb.jsx";

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
                <h2 className="text-center text-3xl bg-dark w-2/5 h-16 ml-10 mt-10 pt-4 pb-4 rounded-full font-bold">List of Genres available </h2>
            </div>
            {(genres ?                                                         //If data is fetched via hook,
                 <div className="container grid grid-cols-6 mx-8 fade-in">
                    {genres.map((genre, index) => {  
                        console.log(genre);                          //genre = currentElement, index = this
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

