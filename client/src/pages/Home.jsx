import { fetchChartYear } from '../api/index';
import React, { useState, useEffect } from 'react';
import "../App.css"
import SimpleBarReact from "simplebar-react"
import "simplebar/src/simplebar.css"
import Label from "../components/Label"
import Dropdown from "../components/Dropdown"
import Entry from "../components/Entry"
import ArtistCard from "../components/ArtistCard"
import Navbar from '../components/Navbar';
import HomeCard from '../components/HomeCard';
import Chart from '../components/Chart';

const Home = () => {
    const [chartYear, setChartYear] = useState(2020);
    const [chart, setChart] = useState([])

    // Chart expansion switch to show all entries
    const [more, setMore] = useState(false)

    useEffect(() => {
        fetchChartYear(chartYear).then((res) => {
            console.log("Fetching chart data..")
            setChart(res.data)
        })
    }, [chartYear])

    // Method for creating an entry component


    return (
        <div>
            <Navbar />
            <div className="grid lg:grid-flow-col justify-items-center gap-20 sm:grid-flow-row px-20">
                <Chart type="byYear" chart_year={2020} />

                <div className=" bg-gray-400 bg-opacity-25 rounded-3xl backdrop-filter backdrop-blur-2xl max-w-4xl">
                    <HomeCard chart={chart} chartYear={chartYear}/>
                    {/* <ArtistCard/> */}
                </div>
            </div>
        </div>
    )
}

export default Home