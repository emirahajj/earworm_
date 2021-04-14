import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import Collapse from "@material-ui/core/Collapse"
import "../App.css"
import GrammyComponent from '../components/GrammyComponent'

const AlbumSnapshot = ({ image, albumName, date, artistName, genre, description, awards }) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(0);
    }, [buttonRef])

    return (
        <div className="album-side flex flex-col max-w-md fade-in">
            <div className="">
                <img className="rounded-3xl" src={image} alt="" />
            </div>
            <div className="flex flex-row w-full mt-6 justify-between">
                <h1 className="text-2xl lg:text-4xl text-left font-bold inline">{albumName}</h1>
                <div className="flex flex-col place-self-center">
                    <span className="">
                        <h1 className="text-2xl ml-2 font-light" >{date}</h1>
                    </span>
                </div>
            </div>
            <Link className="text-2xl text-gray-300" to={"/artists/" + artistName.replace(" ", "-")}> {artistName}</Link>
            <Link to={`/genres/${genre}`} className="text-xl text-gray-400 text-left font-bold ">{genre}</Link>


            {
                (description && (description !== " ") ?
                    <div>
                        <Collapse collapsedHeight={220} in={open}>
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
        </div>
    )
}

export default AlbumSnapshot
