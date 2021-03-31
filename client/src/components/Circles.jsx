import React from "react";
import Circle from "./Circle.jsx";
import Genrelist from "../Genrelist.js";

const Circles = () => {
    return(
        <div className="container grid grid-cols-6">
            {
                Genrelist.map(
                   Genre => (
                      <Circle 
                      key = {Genre.id}
                        src = {Genre.imgURL}
                        genre = {Genre.name}
                      /> 
                   ) 
                )
            }
        </div>
    );
}

export default Circles; 

// "build:css": "postcss src/styles/tailwind.css -o src/styles/main.css",
//     "build:watch": "postcss src/styles/tailwind.css -o src/styles/main.css --watch"