import { fetchChartYear } from '../api/index';
import React, { useState, useEffect } from 'react';
import "../App.css"
import SimpleBarReact from "simplebar-react"
import "simplebar/src/simplebar.css"
import Label from "../components/Label"
import Dropdown from "../components/Dropdown"
import Entry from "../components/Entry"
import GenrePie from "../components/GenrePie"
import Facts from "../components/Facts"
import Navbar from '../components/Navbar';
import TopGenreArtistsList from "../components/TopGenreArtistsList"
import OldestAlbum from "../components/OldestAlbum"
import HomeCard from '../components/HomeCard';
import beats from '../img/beats.jpg'

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

    const onYearChange = (year) => {
        setMore(false)
        setChartYear(year)
    }

    // Method for creating an entry component
    const createEntry = (entry) => {
        return (
            <Entry
                key={entry._id}
                id={entry["album"]._id}
                rank={entry.rank}
                year={chartYear}
                title={entry["album"].title}
                artist={entry["album"].artist}
                cover={entry["album"].img}
            />
        )
    }

    return (
        <div>
            <Navbar />
            <div className="grid lg:grid-flow-col justify-items-center gap-20 sm:grid-flow-row px-20">

                <section className="flex justify-center w-screen-full md:w-96 fade-in">
                    <div className= "w-full">
                        <Label text="Billboard 200 Year-End Chart" />
                        <Dropdown year={chartYear} onChange={onYearChange} />
                        <SimpleBarReact style={{ maxHeight: 840 }}>
                            <div className="flex flex-col p-5">
                                {chart.slice(0, 10).map(createEntry)}
                                {!more ?
                                    <button className="bg-dark text-md px-8 py-2 rounded-full shadow-md font-bold text-white transition duration-500 ease-in-out hover:bg-dark-1 focus:outline-none  mb-4"
                                        onClick={() => { setMore(true) }}
                                    > More </button> :
                                    <button className="bg-dark text-md px-8 py-2 rounded-full shadow-md font-bold text-white transition duration-500 ease-in-out hover:bg-dark-1 focus:outline-none mb-8"
                                        onClick={() => { setMore(false) }}
                                    > Less </button>
                                }
                                {more && chart.slice(10).map(createEntry)}
                            </div>
                        </SimpleBarReact>
                    </div>

                </section>

                <div className=" bg-gray-400 bg-opacity-25 rounded-3xl backdrop-filter backdrop-blur-2xl max-w-5xl">
                    <HomeCard chart={chart} chartYear={chartYear}/>
                    {/* <div className="p-12">
                        <img src={beats} alt="" className="w-full rounded-3xl"/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Home