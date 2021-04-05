import React, { useEffect } from "react";
import Navbar from "../components/Navbar"
import {useState} from "react"
import Label from "../components/Label"
import GenreOverTime from "../components/GenreOverTime"
import Chart from "../components/Chart"
import {fetchGenre} from "../api/index"
import GenrePie from "../components/GenrePie";

const IndividualGenre = ({match:{params:{genreId}}}) => {

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="flex flex-col mx-4 lg:col-span-3">
                    <div className="flex flex-row">
                        <img className= "w-32 rounded-full" src="https://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg" alt=""/>
                        <div className="ml-4">
                            <h1 className="text-3xl font-bold">{genreId}</h1>
                            <p>A description goes here</p>
                        </div>
                    </div>
                    <div>
                        <GenreOverTime genre = {genreId}/>
                        {/* <GenrePie albums= {}/> */}
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

