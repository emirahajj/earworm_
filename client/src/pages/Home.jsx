import Navbar from "../components/Navbar"
import fetchData, { fetchAlbum, fetchChartYear } from '../api/index';
import React, { useState, useEffect } from 'react';
import { fetchChart } from "../api";
import "../App.css"

const Home = () => {
    const [chartYear, setChartYear] = useState(2020);

    useEffect(() => {
        let albums = fetchChart().then((result) => {
            //add more specific logic here like how many to return etc.
            //let yearChart = result.data.filter(entry => entry.year === chartYear)
            let yearChart = fetchChartYear(chartYear).then((res) => {
                console.log(res.data)
            })
            //console.log(typeof result.data[0])
            //setYearChart(result.data);
        });
        //console.log(typeof albums)
    })

    return (
        <div>
            <Navbar />
            <div className="fade-in">
                <h1 className="text-center bg-dark w-2/5 h-14 ml-10 mt-10 pt-4 rounded-full font-bold">Billboard Top Albums</h1>
            </div>
        </div>
    )
}

export default Home
