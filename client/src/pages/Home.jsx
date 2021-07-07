import { fetchChartYear } from '../api/index';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import "../App.css"
import "simplebar/src/simplebar.css"
import ArtistCard from "../components/ArtistCard"
import Navbar from '../components/Navbar';
import HomeCard from '../components/HomeCard';
import Chart from '../components/Chart';

const Home = () => {
    const [chartYear, setChartYear] = useState(2020);
    const [chart, setChart] = useState([]);

    useEffect(() => {
        fetchChartYear(chartYear).then((res) => {
            console.log("Fetching chart data..")
            setChart(res.data)

            console.log(chartYear)
        })
    }, [chartYear])

    // Method for creating an entry component


    return (
        <div>
            <Navbar />
            <div className="grid lg:grid-flow-col justify-items-center gap-20 sm:grid-flow-row px-20">
                <Chart type="byYear" chart_year={chartYear} onChangeYear={setChartYear}/>

                <div className=" bg-gray-400 bg-opacity-25 rounded-3xl backdrop-filter backdrop-blur-2xl max-w-4xl">
                    <HomeCard chart={chart} chartYear={chartYear} />
                    {/* <ArtistCard/> */}
                </div>
            </div>
        </div>
    )
}

export default Home