import React from "react";
import logo from "../img/icon.png"
import { Link } from "react-router-dom"

const  GenreThumb = (props) => {
    return(
        <Link to ={"/genres/" + props.genre}>
            <div className="bg-dark w-48 h-48 text-center rounded-full">           
                {/* <img src={logo} className=  "w-40 h-40 rounded-full" alt="genre-image"/> */}
                <h1 className="flex justify-center text-xl font-bold my-10 pt-20">{props.genre}</h1>
            </div>
        </Link>
    );
}

export default GenreThumb;