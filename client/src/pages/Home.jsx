import Navbar from "../components/Navbar"
import fetchData from '../api/index';
import React, { useState, useEffect } from 'react';
import { fetchChart } from "../api";
import "../App.css"
import logo from "../img/icon.png"
import Label from "../components/Label"
import Dropdown from "../components/Dropdown"
import DropdownList from "../components/DropdownList"
import Entry from "../components/Entry"
import Fact from "../components/Fact"

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
            <div className="grid grid-flow-col gap-20">
                <section className="ml-10 w-96 fade-in">
                    <Label text="Billboard Top Albums" />

                    {/* Chart */}
                    <Dropdown />
                    <div className="flex flex-col p-5">
                        {/*
                        {topAlbums.map((album) => {
                            <Entry
                                key={topAlbums.id}
                                title={topAlbums.title}
                                artist={topAlbums.artist}
                            />
                        })}
                        */}
                        <Entry id="1" title="Album 1" artist="Artist 1" />
                        <Entry id="2" title="Album 2" artist="Artist 2" />
                        <Entry id="3" title="Album 3" artist="Artist 3" />
                        <Entry id="4" title="Album 4" artist="Artist 4" />
                        <Entry id="5" title="Album 5" artist="Artist 5" />
                    </div>
                </section>
                <section className="col-span-2">
                    <Label text="Statistics" />
                    <Fact />
                    <Fact />
                </section>
            </div>
        </div>
    )
}

export default Home
