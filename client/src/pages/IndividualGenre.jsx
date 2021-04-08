import React, { useEffect } from "react";
import Navbar from "../components/Navbar"
import { useState } from "react"
import Label from "../components/Label"
import GenreOverTime from "../components/GenreOverTime"
import Chart from "../components/Chart"
import Button from "../components/Button"
import { fetchAllAlbumsInGenre, fetchGenre } from "../api/index"
import BarGenreChart from "../components/BarGenreChart";
import Collapse from "@material-ui/core/Collapse"

const IndividualGenre = ({ match: { params: { genreId } } }) => {


    const [genreObject, setGenreObject] = useState(null);
    const [genreCount, setGenreCount] = useState(0);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        fetchAllAlbumsInGenre(genreId).then((res) => {
            setGenreCount(res.data);
        });
        fetchGenre(genreId).then((res) => {
            setGenreObject(res.data[0])
        });
    }, [genreId])


    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 mt-10 ml-10 lg:grid-cols-5">
                <div className="flex flex-col lg:col-span-3">
                    <div className="flex flex-row">
                        <div class="rounded-full font-bold text-6xl h-64 w-64 flex items-center justify-center bg-gray-700">{genreId}</div>
                        <div class="flex flex-col">
                            <Collapse collapsedHeight={220} in={open}>
                                {genreObject ? <p className="ml-5 font-light max-w-md" id="drop">{genreObject.desc}</p> : <p></p>}
                            </Collapse>
                            <p className=" text-gray-400 text-right inline font-bold" onClick={() => setOpen(!open)} variant="custom"
                                aria-controls="drop"
                                aria-expanded={open}>{open ? "Less" : "More"}
                            </p>
                        </div>



                    </div>
                    <div className="mt-16">
                        <GenreOverTime genre={genreId} />
                        <p>Out of 5778 unique albums apprering on this chart, {genreId} accounts for {genreCount.length} albums, or {Math.floor(genreCount.length / 5778 * 100)}% of unique albums</p>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <Chart type="byGenre" genre={genreId} />

                </div>
            </div>
        </div>
    );
}

export default IndividualGenre;

