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

const Home = (props) => {
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

                <div className=" bg-gray-400 bg-opacity-25 rounded-3xl backdrop-filter backdrop-blur-2xl max-w-4xl overflow-scroll" style={{maxHeight : 940}}>
                    {/* <HomeCard chart={chart} chartYear={chartYear} /> */}
                    <div className="flex p-12 gap-12 flex-row">
                        <div className="w-96">
                            <img src={sample} alt="" className=" rounded-2xl mb-6"/>
                            <h1 className="text-3xl font-bold">AlbumName</h1>
                            <h2 className="text-2xl text-gray-400">ArtistName</h2>
                            <p className='mt-6'>Sample Long Text Sample Long Text Sample Long Text Sample Long Text Sample Long Text Sample Long Text Sample Long Text Sample Long Text Sample Long Text Sample Long Text Sample Long Text</p>
                            <div className="bg-red-900">
                                <p>Preview this Album</p>
                            </div>
                        </div>
                        <div className="w-96 bg-black">
                            <h1>hi2!</h1>
                        </div>
                    </div>
                    {/* {React.cloneElement(props.children, {chart: chart, chartYear: chartYear})} */}
                    {/* <ArtistCard/> */}
                </div>
            </div>
        </div>
    )
}

export default Home