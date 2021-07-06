import React, { useState, useEffect } from 'react';
import "../App.css"
import "simplebar/src/simplebar.css"
import Label from "../components/Label"
import GenrePie from "../components/GenrePie"
import Facts from "../components/Facts"
import TopGenreArtistsList from "../components/TopGenreArtistsList"
import OldestAlbum from "../components/OldestAlbum"


const HomeCard = ({chart, chartYear}) => {

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
            if (entry["album"].awards.length > mostAwarded.awards.length) {
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

        return [topGenre, topGenreCount, otherGenres, mostAwarded, moreMostAwarded]
    }

    // Returns the oldest album on a year's chart
    const getOldestAlbum = () => {

        var oldestAlbum = {
            release: 2020
        }

        chart.forEach((entry) => {

            // Find the oldest album
            if (entry["album"].release < oldestAlbum.release) {
                oldestAlbum = entry["album"]
            }
        })

        return oldestAlbum
    }


    return (
        <div className="flex flex-row px-12 gap-12">
            <section className="grid justify-items-center fade-in">
                <div>
                    <Label text="Quick Facts" />
                </div>
                <div>
                    {chart.slice(0, 1).map((entry) => {
                        return (
                            <Facts
                                key="0"
                                topEntry={entry}
                                data={getFactsData()}
                            />
                        )
                    })}
                </div>
                <div>
                    <Label text="Top 100 Albums by Genre" />
                    <GenrePie chartyear={chart} type="yearly" />
                </div>
            </section>
                    {/*featured artists column */}

            <section className="flex flex-col items-center">
                <TopGenreArtistsList
                    data={getFactsData()}
                    year={chartYear}
                />
                <OldestAlbum
                    data={getOldestAlbum()}
                    year={chartYear}
                />
            </section>
        </div>
    )
}

export default HomeCard