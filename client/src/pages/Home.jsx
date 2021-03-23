import Navbar from "../components/Navbar"
import fetchData from '../api/index';
import React, { useState, useEffect } from 'react';
import { fetchChart } from "../api";

const Home = () => {
    const [yearChart, setYearChart] = useState(2020);

    useEffect(() => {
        let albums = fetchChart().then((result) => {
            //add more specific logic here like how many to return etc.
            setYearChart(result.data);
        });
    })

    return (
        <div>
            <Navbar />
            <div>
                <h1 className="text-center bg-dark w-2/5 h-14 ml-10 mt-10 pt-4 rounded-full font-bold">Billboard Top Albums</h1>
                <div>Hello</div>
            </div>
        </div>
    )
}

export default Home
