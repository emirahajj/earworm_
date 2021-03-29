import React from "react";
import Navbar from "../components/Navbar"

const Artists = () => {
    return (
        <div>
            <Navbar />
            <section className= "flex justify-center">
                <div className= "w-1/3">
                    <h1 className="font-bold text-center">About Earworm</h1>
                    <p className=" text-gray-300">At the end of every year, Billboard releases its Billboard 200 Year End Charts and one of these charts lists the top 200 albums for that year. Earworm is a compilation of Billboard 200 Albums' charts over a 50 year period from 1970-2020. The application provides an overview of the top albums on every year's chart, in addition to interesting facts and data visualization to offer insights on the way music trends change and develop over time. The application also includes information about all the artists, albums and genres that appear on the charts.</p>
                </div>
            </section>
        </div>
    );
}

export default Artists;

