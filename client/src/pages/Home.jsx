import { fetchChartYear } from '../api/index';
import React, { useState, useEffect } from 'react';
import "../App.css"
import Navbar from "../components/Navbar"
import Label from "../components/Label"
import Dropdown from "../components/Dropdown"
import Entry from "../components/Entry"
import Fact from "../components/Fact"
import GenrePie from "../components/GenrePie"
import List from "../components/List"
import SimpleBarReact from "simplebar-react"
import "simplebar/src/simplebar.css"

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

    // Creates a new array object
    const getTopGenre = () => {
        var count = {}
        var topGenre = ""
        var topCount = 0
        var otherGenres = []
        chart.slice(0, 10).forEach((entry) => {
            count[entry["album"].genre] = (count[entry["album"].genre] || 0) + 1
        })

        for (var key in count) {
            if (count[key] > topCount) {
                topCount = count[key]
                topGenre = key
            } else {
                otherGenres.push(key)
            }
        }

        return [topGenre, topCount, otherGenres]
    }

    return (
        <div>
            <Navbar />
            <div className="grid grid-flow-col gap-20">

                <section className="ml-10 w-96 fade-in">
                    <Label text="Billboard Top Albums" />
                    <Dropdown year={chartYear} onChange={onYearChange} />
                    <SimpleBarReact style={{ maxHeight: 700 }}>
                        <div className="flex-initial flex-col p-5">
                            {chart.map((entry) => {
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
                    </SimpleBarReact>
                    
                </section>

                <section className="col-span-2 grid justify-items-center max-w-xl fade-in">
                    <div>
                        <Label text="Quick Facts" />
                    </div>
                    <div className="justify-self-start">
                        <div className="flex flex-row mt-5">
                            <div className="w-96 space-y-6">
                                {chart.slice(0, 1).map((entry) => {
                                    return (
                                        <Fact
                                            key={entry._id}
                                            id={entry["album"]._id}
                                            title={entry["album"].title}
                                            artist={entry["album"].artist}
                                            genre={entry["album"].genre}
                                            styles={entry["album"].styles}
                                            cover={entry["album"].img}
                                        />
                                    )
                                })}
                                <Fact 
                                    position="right"
                                    topGenre = {getTopGenre()}
                                />
                                <p className="text-center text-sm mt-8">
                                    <strong>When We All Fall Asleep, Where Do We Go?</strong> by Billie Eilish was the album with that had the most awards this year with a total of 5 awards.
                                </p>
                            </div>
                            <List />
                        </div>
                    </div>

                    <Label text="Top 100 Albums by Genre" />
                    <GenrePie chartyear={chart} type="yearly"/>

                </section>
            </div>
        </div>
    )
}

export default Home