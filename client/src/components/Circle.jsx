import React from "react";
//import "../styles/main.css";

const Circle = (props) => {
    return(
        <div className= "container">
            <a href="#">
            <img src={props.src} className= "w-40 h-40 rounded-full" alt="genre-image"/>
            </a>
            <h1 className="px-14 py-6 pr-36">{props.genre}</h1>
        </div>
    );
}

export default Circle;