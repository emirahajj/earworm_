import React, { useEffect } from "react";
import Navbar from "../components/Navbar"
import { useState } from "react"
import GenreOverTime from "../components/GenreOverTime"
import Chart from "../components/Chart"
import { fetchAlbums, fetchAllAlbumsInGenre, fetchGenre } from "../api/index"
import Collapse from "@material-ui/core/Collapse"
import GenrePie from "../components/GenrePie";
import "../App.css"

const IndividualGenre = ({ match: { params: { genreId } } }) => {
    const [genreObject, setGenreObject] = useState(null);
    const [genreCount, setGenreCount] = useState(0);
    const [open, setOpen] = useState(false);
    const [albumArray, setAlbumArray] = useState(null);
    // const [percentage, setPercentage] = useState({
    //     [genreId] : 99,
    //     other: 1
    // });

    useEffect(() => {
        fetchAllAlbumsInGenre(genreId).then((res) => {
            setGenreCount(res.data[0][`${genreId}`]);

        });
        fetchGenre(genreId).then((res) => {
            setGenreObject(res.data[0])
        });
        fetchAlbums().then((res) => {
            setAlbumArray(res.data);
        });
    }, [genreId])


    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 mt-10 ml-10 lg:grid-cols-5 fade-in">
                <div className="flex flex-col lg:col-span-3">
                    <div className="flex flex-col">
                        <div class="font-bold text-8xl">{genreId}</div>
                        <div class="flex flex-col">
                            <Collapse collapsedHeight={220} in={open}>
                                {genreObject ? <p className="font-light mt-4 text-gray-200 text-justify" id="drop">{genreObject.desc}</p> : <p></p>}
                            </Collapse>
                            {
                                (genreObject ?
                                    (genreObject.desc.length > 1075 ?
                                        <button className=" text-gray-400 text-right inline font-bold mt-4 focus:outline-none" onClick={() => setOpen(!open)} variant="custom"
                                            aria-controls="drop"
                                            aria-expanded={open}>{open ? "Less" : "More"}

                                        </button>
                                        :
                                        <p></p>
                                    )
                                    :
                                    <p> Description not Available</p>
                                )
                            }

                        </div>



                    </div>
                    <div className="">
                        <GenreOverTime genre={genreId} />
                        <h1 className="text-4xl mt-3 font-bold mb-3 text-white text-center">All Albums by Genre</h1>
                        {albumArray ? <GenrePie chartyear={albumArray} genreId={genreId} type="allTime" /> : <p style={{ height: 300 }}></p>}
                        <p className="p-3 text-xl text-gray-300">Out of 5778 unique albums apprering on this chart, {genreId} accounts for {genreCount} albums, or {Math.floor(genreCount / 5778 * 100)}% of unique albums</p>

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

