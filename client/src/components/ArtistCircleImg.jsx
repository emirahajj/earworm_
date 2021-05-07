import React from "react";
import placeholder from "../img/placeholder-dark.png"
import "../App.css"

const ArtistCircleImg = (props) => {
    return (
        <div className="flex-none w-72 h-72 rounded-full overflow-hidden shadow-md mx-8">
            {(props.image !== "0" ?
                <img className="object-cover object-center fade-in h-full w-full" src={props.image} alt="N/A"></img>
                :
                <img className="h-full" src={placeholder} alt="Artist Cover"></img>
            )}
        </div>
    );
}

export default ArtistCircleImg