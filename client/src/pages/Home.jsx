import Navbar from "../components/Navbar"
import fetchData from '../api/index';
import React, { useState, useEffect } from 'react';
import { fetchChart } from "../api";
import "../App.css"
import logo from "../img/icon.png"
import Dropdown from "../components/Dropdown"
import ChartItem from "../components/ChartItem"

const Home = () => {
    const [yearChart, setYearChart] = useState(2020);

    useEffect(() => {
        let albums = fetchChart().then((result) => {
            //add more specific logic here like how many to return etc.
            setYearChart(result.data);
        });
    })

    return (
        <div className="fade-in">
            <Navbar />
            <div className="ml-10 w-96">
                <h1 className="text-center bg-dark w-96 h-14 mt-10 pt-4 rounded-full font-bold">Billboard Top Albums</h1>

                {/* Chart */}
                <Dropdown />
                <div className="flex flex-col p-5">
                    <ChartItem albumTitle="" artistName="" />
                    <ChartItem albumTitle="" artistName="" />
                    <ChartItem albumTitle="" artistName="" />
                    <ChartItem albumTitle="" artistName="" />
                </div>
            </div>
        </div>
    )
}

export default Home
