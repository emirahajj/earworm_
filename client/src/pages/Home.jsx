import Navbar from "../components/Navbar"
import fetchData from '../api/index';
import React, {useState, useEffect} from 'react';
import { fetchChart } from "../api";

const Home = () => {
    const [yearChart, setYearChart] = useState(2020);

    useEffect(()=> {
      let albums = fetchChart().then((result) => {
          //add more specific logic here like how many to return etc.
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
