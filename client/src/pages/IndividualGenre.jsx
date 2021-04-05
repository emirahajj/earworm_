import React, { useEffect } from "react";
import Navbar from "../components/Navbar"
import {useState} from "react"
import Label from "../components/Label"
import GenreOverTime from "../components/GenreOverTime"
import Chart from "../components/Chart"
import {fetchGenre} from "../api/index"
import GenrePie from "../components/GenrePie";

const IndividualGenre = ({match:{params:{genreId}}}) => {


    const [genreObject, setGenreObject] = useState([]);


    useEffect(() => {
        fetchGenre(genreId).then((res)=>{
            console.log(res.data)
            setGenreObject(res.data[0])
        })
    }, [genreId])

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="flex flex-col mx-4 lg:col-span-3">
                    <div className="flex flex-row">
                    <div class="rounded-full text-5xl h-64 w-64 flex items-center justify-center bg-gray-700">{genreId}</div>

                        <div className="ml-4">
                            <h1 className="text-3xl  font-bold">{genreId}</h1>
                            <p className= "">{genreObject.description}</p>
                        </div>
                    </div>
                    <div>
                        <GenreOverTime genre = {genreId}/>
                        {/* <GenrePie chart= "allTime"/> */}
                    </div>
                </div>

                <div className="lg:col-span-2">
                <Chart type= "byGenre" genre= {genreId}/>

                </div>
            </div>
        </div>
    );
}

export default IndividualGenre;

