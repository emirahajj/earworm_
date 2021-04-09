import { fetchChartYear } from '../api/index';
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
        fetchChartYear(chartYear).then((res) => {
            console.log("Fetching chart data..")
            setChart(res.data)
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
                    <Dropdown year={chartYear} onChange={onYearChange} />
                    <div className="flex flex-col p-5">
                        {chart.slice(0, 10).map((entry) => {
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
                        })}
                    </div>
                </section>

                <section className="col-span-2 max-w-md justify-center fade-in">
                    <Label text="Statistics" />
                    {chart.slice(0, 1).map((entry) => {
                        return (
                            <Fact
                                key={entry._id}
                                title={entry["album"].title}
                                artist={entry["album"].artist}
                                genre={entry["album"].genre}
                                styles={entry["album"].styles}
                                cover={entry["album"].img}
                            />
                        )
                    })}
                    <Fact position="right" />

                    <Label text="Top 100 Albums by Genre" />
                    <GenrePie chartyear={chart} />

                </section>
            </div>
        </div>
    )
}

export default Home