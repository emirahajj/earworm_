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
import { a } from "@react-spring/web";

const Home = () => {
    const [chartYear, setChartYear] = useState(2020);
    const [chart, setChart] = useState([])
    const [album, setAlbum] = useState({
        albumTitle:"",
        artistName: ""
    })

    useEffect(() => {
        fetchChart().then((result) => {
            //add more specific logic here like how many to return etc.
            //let yearChart = result.data.filter(entry => entry.year === chartYear)
            fetchChartYear(chartYear).then((res) => {
                console.log("Fetching chart data..")
                setChart(res.data)
            })
            //console.log(typeof result.data[0])
            //setYearChart(result.data);
        });
        //console.log(typeof albums)
    }, [chartYear])

    const onYearChange = (year) => {
        setChartYear(year)
    }

    const getAlbum = (chartEntry) => {
        fetchAlbum(chartEntry.album).then((res) => {
            console.log(res.data[0])
            return res.data[0]
        })
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
                        {chart.slice(0, 10).map((entry) => {
                            // const album = getAlbum(entry)
                            return (
                                <Entry
                                    key={entry._id}
                                    rank={entry.rank}
                                    year={entry.year}
                                    title="Album Title"
                                    artist="Artist"
                                />
                            )
                        })}
                    </div>
                </section>
                <section className="col-span-2 fade-in">
                    <Label text="Statistics" />
                    <Fact />
                    <Fact />
                    <Label text="Top 100 Albums by Genre" />
                </section>
            </div>
        </div>
    )
}

export default Home