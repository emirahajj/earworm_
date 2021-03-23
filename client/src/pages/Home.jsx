import Navbar from "../components/Navbar"
import fetchData from '../api/index';
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, {useState, useEffect} from 'react';
>>>>>>> main
import { fetchChart } from "../api";

const Home = () => {
  const [yearChart, setYearChart] = useState(2020);

<<<<<<< HEAD
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
            </div>
        </div>
    )
=======
  useEffect(() => {
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
>>>>>>> main
}

export default Home
