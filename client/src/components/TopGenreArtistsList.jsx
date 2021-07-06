import { useState, useEffect } from 'react';
import { fetchChartYearByGenre } from '../api/index';
import { Link } from 'react-router-dom'
import Label from './Label'
import ImageWithOverlay from './ImageWithOverlay';
import ArtistImage from './ArtistImage';

const TopGenreArtistsList = ({ data, year }) => {
    const [topGenreEntries, setTopGenreEntries] = useState([])

    useEffect(() => {
        fetchChartYearByGenre(data[0], year).then((res) => {
            setTopGenreEntries(res.data.slice(0, 6))
        })
    }, [data, year]) 

    return (
        <div className="flex flex-col items-center">
            <Label text={"Featured " + data[0] + " Artists"} />
            <div className="mt-12 font-bold">
                <div className="grid grid-flow-col grid-rows-3 items-center gap-8">
                    {topGenreEntries.map((entry) => {
                        return (
                            <Link key={entry._id} title={entry["album"].artist} to={"/artist/" + entry["album"].artist.replace(' ', '%20')}>
                                <ArtistImage name={entry["album"].artist}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TopGenreArtistsList
