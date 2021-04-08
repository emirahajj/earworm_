import { fetchChartYear } from '../api/index';
import { fetchChartYearByGenre } from "../api";
import React, { useState, useEffect } from 'react';
import "../App.css"
import Label from "../components/Label"
import Dropdown from "../components/Dropdown"
import Entry from "../components/Entry"

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

    return(
        <section className="ml-10 w-96 fade-in">
        <Label text={(props.type === "byYear") ? "Billboard 200 Albums": `Top ${props.genre} Albums`} />
        <Dropdown year={chartYear} onChange={onYearChange} />
        <div className="flex flex-col p-5">
            {chart.slice(0, 10).map((entry) => {
                return (
                    <Entry
                        key={entry._id}
                        id= {entry["album"]._id}
                        rank={entry.rank}
                        year={chartYear}
                        title={entry["album"].title}
                        artist={entry["album"].artist}
                        cover={entry["album"].img}
                    />
                )
            })}
            {chart.length === 0 ? <p className="text-center mt-20 text-xl">No {props.genre} albums this chart year...</p> : <p></p> }

        </div>
    </section>
    )
}
export default Chart;
