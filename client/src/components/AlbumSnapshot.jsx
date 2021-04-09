import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Collapse from "@material-ui/core/Collapse"
import "../App.css"

const AlbumSnapshot = ({ image, albumName, date, artistName, genre, description }) => {
    const [open, setOpen] = useState(false);


    return (
        <div className="album-side flex flex-col max-w-md fade-in">
            <div className="">
                <img className="rounded-3xl" src={image} alt="" />
            </div>
            <div className="flex flex-row w-full mt-6 justify-between">
                <h1 className="text-2xl lg:text-5xl font-bold">{albumName}</h1>
                <div className="flex flex-col place-self-center">
                    <span className="">
                        <h1 className="text-2xl font-light" >{date}</h1>
                    </span>
                </div>
            </div>
            <Link className="text-2xl text-gray-400" to={"/artists/" + artistName.replace(" ", "-")}> {artistName}</Link>

            <Collapse collapsedHeight={220} in={open}>
                <p className="mt-4">{description}</p>
            </Collapse>
            <p className=" text-gray-400 text-right inline font-bold pb-8" onClick={() => setOpen(!open)} variant="custom"
                aria-controls="drop"
                aria-expanded={open}>{open ? "See Less..." : "See More..."}
            </p>
        </div>
    )
}

export default AlbumSnapshot
