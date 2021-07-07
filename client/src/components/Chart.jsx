import { fetchChartYear } from '../api/index';
import { fetchChartYearByGenre } from "../api";
import React, { useState, useEffect, useCallback } from 'react';
import "../App.css"
import Label from "../components/Label"
import Dropdown from "../components/Dropdown"
import Entry from "../components/Entry"

const Chart = ({type, chart_year, genre, onChangeYear}) => {
    //year integer
    const [chartYear, setChartYear] = useState(chart_year);

    //actual array of albums
    const [chart, setChart] = useState([])
    const [more, setMore] = useState(false);


    useEffect(() => {
        if (type === "byYear"){
            fetchChartYear(chartYear).then((res) => {
                console.log("Fetching chart data..")
                setChart(res.data)
            })
        } else {
            fetchChartYearByGenre(genre, chartYear).then((res)=> {
                setChart(res.data)
            })

        }

    }, [chartYear, genre, type])

    const onYearChange = (year) => {
        setChartYear(year)
        onChangeYear(year)
    }
    
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

    return(
        <section className="ml-10 w-96 fade-in">
        <Label text={(type === "byYear") ? "Billboard 200 Albums": `Top ${genre.replace('|','/')} Albums`} />
        <Dropdown year={chartYear} onChange={onYearChange} />
        <div className="flex flex-col p-5 overflow-scroll" style={{maxHeight : 840}}>
            {chart.slice(0, 10).map(createEntry)}
            {!more ?
                <button className="bg-dark text-md px-8 py-2 rounded-full shadow-md font-bold text-white transition duration-500 ease-in-out hover:bg-dark-1 focus:outline-none  mb-4"
                        onClick={() => { setMore(true) }}> More </button> 
                :
                <button className="bg-dark text-md px-8 py-2 rounded-full shadow-md font-bold text-white transition duration-500 ease-in-out hover:bg-dark-1 focus:outline-none mb-8"
                        onClick={() => { setMore(false) }}> Less </button>}
                {more && chart.slice(10).map(createEntry)}
            {genre && 
                (chart.length === 0 ? <p className="text-center mt-20 text-xl">No {genre.replace('|','/')} albums this chart year...</p> : <p></p> )
            }
            

        </div>
    </section>
    )
}
export default Chart;
