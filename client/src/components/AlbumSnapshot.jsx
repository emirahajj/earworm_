import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import Collapse from "@material-ui/core/Collapse"
import "../App.css"
import SpotifyWidget from '../components/SpotifyWidget'
import GrammyRecap from './GrammyRecap'
import ChartPosRecap from './ChartPosRecap'

const AlbumSnapshot = ({ positions, spotifyID, image, albumName, date, artistName, genre, description, awards }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col fade-in md:flex-row md:justify-around">
            <div className="flex-shrink-0">
                {/* <img className="rounded-3xl" src={image} alt="" /> */}
                <SpotifyWidget spotifyID={spotifyID} height={600}/>
            </div>
            <div className="flex-shrink md:max-w-md lg:max-w-2xl">
                <div className="flex flex-row w-full mt-6 justify-between">
                    <h1 className="text-2xl text-left font-bold inline lg:text-4xl">{albumName}</h1>
                    <div className="flex flex-col place-self-center">
                            <h1 className="text-2xl ml-2 font-light inline" >{date}</h1>
                    </div>
                </div>
                <Link className="text-2xl block text-gray-300" to={"/artists/" + artistName.replace(" ", "-")}> {artistName}</Link>
                <Link to={`/genres/`} className="text-xl text-gray-400 text-left font-bold ">{genre}</Link>
                {
                    (description && (description !== " ") ?
                        <div>
                            <Collapse collapsedHeight={140} in={open}>
                                <p className="fade-in mt-4">{description}</p>
                            </Collapse>
                            <button className="flex text-gray-400 mt-3 justify-start font-bold bg-dark rounded-full px-3 py-1 focus:outline-none mb-4" onClick={() => setOpen(!open)} variant="custom"
                                aria-controls="drop"
                                aria-expanded={open}>
                                {open ? "Less" : "More"}
                            </button>
                        </div>
                        :
                        <p className="mt-10 text-gray-3  text-2xl text-center">No bio available</p>
                    )
                }

                <div className="flex flex-col lg:flex-row justify-around">
                {awards.length > 0 ? 
                    <>
                        <ChartPosRecap positions={positions}/>
                        <GrammyRecap  awards={awards} artist={artistName} />
                    </> : <ChartPosRecap positions={positions}/>
                }
                

                </div>
            </div>
        </div>
    )
}

export default AlbumSnapshot
