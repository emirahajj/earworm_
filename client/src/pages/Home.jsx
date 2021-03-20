import Navbar from "../components/Navbar"
import fetchData from './api/index';
import React, {useState, useEffect} from 'react';

const Home = () => {
    const [yearChart, setYearChart] = useState(2020);

    useEffect(()=> {
      let albums = fetchData().then((result) => {
        setYearChart(result.data);
      });
    })
    return (
        <div className="bg-indigo-600">
            <Navbar />
        </div>
    )
}

export default Home
