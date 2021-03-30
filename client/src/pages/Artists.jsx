import React from "react";
import Navbar from "../components/Navbar"
import Image from "../components/Image.jsx";
import "../App.css";
// import Artists from "../artist_list.js";

const Artists = () => {
    return (
        <div>
            <Navbar className="fade-in" />

            <div className="flex justify-center fade-in">
                <h2 className="text-center bg-dark w-2/5 h-14 ml-10 mt-10 pt-4 rounded-full font-bold">These are some of the artists: </h2>
            </div>

            {/*{
                Artists.map(
                    Artist => (
                        <Image
                            key={Artist.id}
                            src={Artist.artisturl}
                            name={Artist.name}
                            genre={Artist.genre}
                        />
                    )
                )
            }*/}
        </div>
    );
}

export default Artists;

