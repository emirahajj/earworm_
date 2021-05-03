import { useState, useEffect } from 'react';
import { fetchChartYearByGenre } from '../api/index';
import PropTypes from "prop-types"
import TopEntry from "./facts/TopEntry"
import TopGenre from "./facts/TopGenre"
import MostAwarded from "./facts/MostAwarded"
import TopGenreArtistsList from "./facts/TopGenreArtistsList"

const Facts = ({ topEntry, year, data }) => {
    const [topGenreEntries, setTopGenreEntries] = useState([])

    useEffect(() => {
        fetchChartYearByGenre(data[0], year).then((res) => {
            console.log("Fetching top albums for the top genre..")
            setTopGenreEntries(res.data.slice(0, 5))
        })
    }, [data, year])

    return (
        <div className="flex flex-row mt-5">
            <div className="w-96 space-y-6">
                <TopEntry
                    key={topEntry._id}
                    id={topEntry["album"]._id}
                    artist={topEntry["album"].artist}
                    cover={topEntry["album"].img}
                    title={topEntry["album"].title}
                    genre={topEntry["album"].genre}
                    styles={topEntry["album"].styles}
                />
                <TopGenre
                    topGenre={data[0]}
                    topGenreCount={data[1]}
                    otherGenres={data[2]}
                />
                <MostAwarded 
                    mostAwarded={data[3]}
                    moreMostAwarded={data[4]}
                />
            </div>
            <TopGenreArtistsList 
                genre={data[0]} 
                entries={topGenreEntries}
            />
        </div>
    )
}

Facts.defaultProps = {
    topEntry: {},
}

Facts.propTypes = {
    topEntry: PropTypes.object,
}

export default Facts
