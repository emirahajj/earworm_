import React from "react";
import Navbar from "../components/Navbar"

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
                            <p>This is the genre description</p>
                        </div>
                    </div>
                    <div>
                        <p>This is where the fun graph will go</p>
                    </div>


                </div>

                <div className="lg:col-span-2">
                    <p>This is where the chart portion will go</p>
                </div>
            </div>
        </div>
    );
}

export default IndividualGenre;

