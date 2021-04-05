import { fetchChartYear } from '../api/index';
import { fetchChartYearByGenre } from "../api";
import React, { useState, useEffect } from 'react';
import "../App.css"
import Label from "../components/Label"
import Dropdown from "../components/Dropdown"
import Entry from "../components/Entry"
import Fact from "../components/Fact"
import GenrePie from "../components/GenrePie"
import GenreOverTime from '../components/GenreOverTime';

const Chart = (props) => {
    //year integer
    const [chartYear, setChartYear] = useState(2020);

    //actual array of albums
    const [chart, setChart] = useState([])

    useEffect(() => {
        if (props.type === "byYear"){
            fetchChartYear(chartYear).then((res) => {
                console.log("Fetching chart data..")
                setChart(res.data)
            })
        } else {
            fetchChartYearByGenre(props.genre, chartYear).then((res)=> {
                setChart(res.data)
            })

        }

    }, [chartYear, props])

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

    return(
        <section className="ml-10 w-96 fade-in">
        <Label text={(props.type === "byYear") ? "Billboard 200 Albums": `Top ${props.genre} Albums`} />
        <Dropdown year={chartYear} onChange={onYearChange} />
        <div className="flex flex-col p-5">
            {chart.slice(0, 10).map((entry) => {
                return (
                    <Entry
                        key={entry._id}
                        id= {entry._id}
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
    )
}
export default Chart;
