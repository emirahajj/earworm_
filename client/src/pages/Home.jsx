import { fetchChartYear } from '../api/index';
import React, { useState, useEffect } from 'react';
import "../App.css"
import SimpleBarReact from "simplebar-react"
import "simplebar/src/simplebar.css"
import Navbar from "../components/Navbar"
import Label from "../components/Label"
import Dropdown from "../components/Dropdown"
import Entry from "../components/Entry"
import GenrePie from "../components/GenrePie"
import Facts from "../components/Facts"

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

    // Returns a new array object with data for Facts
    const getFactsData = () => {
        var genreCount = {} // To store genres and the number of their entries on a chart
        var mostAwarded = { // To store most awarded album
            title: "",
            awards: []
        }

        var topGenre = "" // To store genre that had the most entries on a chart
        var topGenreCount = 0 // To store the number of entries for that genre
        var otherGenres = [] // To store other genres that had entries the chart

        chart.forEach((entry) => {
            // Add to genres' counts by looking at the genre of each entry
            genreCount[entry["album"].genre] = (genreCount[entry["album"].genre] || 0) + 1

            // Find the most awarded album
            if(entry["album"].awards.length > mostAwarded.awards.length) {
                mostAwarded = entry["album"]
            }
        })

        // Check if there is more than one most awarded album (same number of awards)
        const moreMostAwarded = chart.filter((entry) => {
            return (entry["album"]._id !== mostAwarded._id) && 
                   (entry["album"].awards.length === mostAwarded.awards.length)
        })

        // Find genre with the most entries
        for (var genre in genreCount) {
            if (genreCount[genre] > topGenreCount) {
                topGenreCount = genreCount[genre]
                topGenre = genre
            } else {
                otherGenres.push(genre)
            }
        }

        //console.log(awards)

        return [topGenre, topGenreCount, otherGenres, mostAwarded, moreMostAwarded]
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
            <div className="grid grid-flow-col gap-20">

                <section className="ml-10 w-96 fade-in">
                    <Label text="Billboard Top Albums" />
                    <Dropdown year={chartYear} onChange={onYearChange} />
                    <SimpleBarReact style={{ maxHeight: 840 }}>
                        <div className="flex-initial flex-col p-5">
                            {chart.slice(0, 10).map(createEntry)}
                            {!more && 
                            <button className="bg-dark text-md px-8 py-2 rounded-full shadow-md font-bold text-white transition duration-500 ease-in-out hover:bg-dark-1 focus:outline-none ml-24 mb-4" 
                            onClick={() => {setMore(true)}}
                            > More </button>}
                            {more && chart.slice(10).map(createEntry)}
                        </div>
                    </SimpleBarReact>
                    
                </section>

                <section className="col-span-2 grid justify-items-center max-w-2xl fade-in">
                    <div>
                        <Label text="Quick Facts" />
                    </div>
                    <div className="mt-3">
                        {chart.slice(0, 1).map((entry) => {
                            return (
                                <Facts
                                    key="0"
                                    topEntry={entry}
                                    year={chartYear}
                                    data={getFactsData()} 
                                />
                            )
                        })}
                    </div>
                    <div>
                        <Label text="Top 100 Albums by Genre" />
                        <GenrePie chartyear={chart} type="yearly"/>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Home