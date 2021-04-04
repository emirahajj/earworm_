import { fetchChartYear } from '../api/index';
import { fetchChart } from "../api";
import React, { useState, useEffect } from 'react';
import "../App.css"
import Navbar from "../components/Navbar"
import Label from "../components/Label"
import Dropdown from "../components/Dropdown"
import Entry from "../components/Entry"
import Fact from "../components/Fact"
import GenrePie from "../components/GenrePie"

const Home = () => {
    const [chartYear, setChartYear] = useState(2020);
    const [chart, setChart] = useState([])

    useEffect(() => {
        fetchChart().then((result) => {
            fetchChartYear(chartYear).then((res) => {
                console.log("Fetching chart data..")
                setChart(res.data)
            })
        });
    }, [chartYear])

    const onYearChange = (year) => {
        setChartYear(year)
    }

    const getRank = (chartPositions) => {
        for (let i = 0; i < chartPositions.length; i++) {
            if (parseInt(chartPositions[i].year) === chartYear) {
                return chartPositions[i].rank
            }
        }
    }

    return (
        <div>
            <Navbar />
            <div className="grid grid-flow-col gap-20">
                <section className="ml-10 w-96 fade-in">
                    <Label text="Billboard Top Albums" />

                    {/* Chart */}
                    <Dropdown year={chartYear} onChange={onYearChange} />
                    <div className="flex flex-col p-5">
                        {chart.slice(0, 10).map((entry) => {
                            return (
                                <Entry
                                    key={entry._id}
                                    rank={getRank(entry.chart_positions)}
                                    year={chartYear}
                                    title={entry.title}
                                    artist={entry.artist}
                                    cover={entry.img}
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
                    <GenrePie year = {chartYear} albums = {chart}/>
                </section>
            </div>
        </div>
    )
}

export default Home