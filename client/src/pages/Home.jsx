import { fetchChartYear } from '../api/index';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import "../App.css"
import "simplebar/src/simplebar.css"
import ArtistCard from "../components/ArtistCard"
import Navbar from '../components/Navbar';
import HomeCard from '../components/HomeCard';
import Chart from '../components/Chart';
import sample from '../img/album-cover.jpg'
import spot from '../img/spotifylogo.png'

const Home = (props) => {
    const [chartYear, setChartYear] = useState(2020);
    const [chart, setChart] = useState([]);
    const [artistLetter, setArtistLetter] = useState("A");

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    useEffect(() => {
        fetchChartYear(chartYear).then((res) => {
            console.log("Fetching chart data..")
            setChart(res.data)

            console.log(chartYear)
        })
    }, [chartYear])

    // Method for creating an entry component


    return (
        <div className="w-screen">
            <Navbar />
            <div className="grid lg:grid-flow-col justify-items-center sm:grid-flow-row ">
                <Chart type="byYear" chart_year={chartYear} onChangeYear={setChartYear}/>

                <div className=" bg-gray-400 bg-opacity-25 rounded-3xl backdrop-filter backdrop-blur-2xl w-screen md:max-w-4xl overflow-scroll">
                    {/* <HomeCard chart={chart} chartYear={chartYear} /> */}

                    {React.cloneElement(props.children, {chart: chart, chartYear: chartYear, artistLetterChange: setArtistLetter, letter: artistLetter})}
                    {/* <ArtistCard/> */}
                </div>
            </div>
        </div>
    )
}

export default Home