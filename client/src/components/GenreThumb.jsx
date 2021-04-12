import React from "react";
import logo from "../img/icon.png"
import { Link } from "react-router-dom"

const  GenreThumb = (props) => {
    return(
        <Link to ={"/genres/" + props.genre}>
            <div className="bg-dark w-40 h-40 text-center rounded-full lg:w-48 lg:h-48 transition duration-500 ease-in-out transform hover:scale-110">           
                {/* <img src={logo} className=  "w-40 h-40 rounded-full" alt="genre-image"/> */}
                <h1 className="flex justify-center text-md font-bold my-10 pt-16 lg:text-xl lg:pt-20">{props.genre}</h1>
            </div>
        </Link>
    );
}

export default GenreThumb;