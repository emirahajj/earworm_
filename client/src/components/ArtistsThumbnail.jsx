import { Link } from "react-router-dom"
import React from "react";
import placeholder from "../img/placeholder-dark.png"
import "../App.css"

const ArtistsThumbnail = (props) => {
    return (
        <div>
            <Link to={"/artist/" + props.name.replace(' ', '-')}>
                <div className="flex justify-center">
                    <div className="flex-none w-48 h-48 rounded-2xl overflow-hidden shadow-md fade-in transition duration-500 ease-in-out transform hover:scale-110 fade-in">
                        {(props.image !== "0" ?
                            <img className="object-cover object-center fade-in h-full w-full" src={props.image} alt="N/A"></img>
                            :
                            <img className="h-full" src={placeholder} alt="Artist Cover"></img>
                        )}
                    </div>
                </div>

                <div className="flex justify-center mb-8 fade-in">
                    <p className="mt-4 text-lg text-center font-bold">{props.name}</p>
                </div>
            </Link>
        </div>
    )
}

export default ArtistsThumbnail
