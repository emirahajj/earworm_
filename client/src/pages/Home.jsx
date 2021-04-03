import Navbar from "../components/Navbar"
import fetchData, { fetchAlbum, fetchChartYear } from '../api/index';
import React, { useState, useEffect } from 'react';
import { fetchChart } from "../api";
import "../App.css"
import logo from "../img/icon.png"
import Label from "../components/Label"
import Dropdown from "../components/Dropdown"
import Entry from "../components/Entry"
import Fact from "../components/Fact"
import GenrePie from "../components/GenrePie"

const Home = () => {
    const [chartYear, setChartYear] = useState(2020);
    const [albumsArray, setAlbumsArray] = useState([ ]);

    useEffect(() => {
        let yearChart = fetchChartYear(chartYear).then((res) => {
            setAlbumsArray(res.data)
        })
    }, [chartYear])

    const onYearChange = (year) => {
        setChartYear(year)
    }

    return (
        <div>
            <Navbar />
            <div className="grid grid-flow-col gap-20">
                <section className="ml-10 w-96 fade-in">
                    <Label text="Billboard Top Albums" />

                    {/* Chart */}
                    <Dropdown year={chartYear} onChange={onYearChange}/>
                    <div className="flex flex-col p-5">
                        {albumsArray.slice(0,10).map((album, index) => {
                            return (                            
                                <Entry
                                id={index}
                                title={album.title}
                                artist={album.artist}
                            />)

                        })}
                    </div>
                </section>
                <section className="col-span-2 fade-in">
                    <Label text="Statistics" />
                    <Fact />
                    <Fact />
                    <Label text="Top 100 Albums by Genre" />
                    <GenrePie year = {chartYear} albums = {albumsArray}/>
                </section>
            </div>
        </div>
    )
}

export default Home