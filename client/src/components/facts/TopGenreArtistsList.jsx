import React from 'react'
import { Link } from 'react-router-dom'
import LinkText from "../LinkText"

const TopGenreArtistsList = ({ genre, entries }) => {
    return (
        <div className=" ml-10 font-bold text-center">
            <h1 className="px-5 py-3 mb-4 w-60 bg-dark rounded-full shadow-md ">Featured {genre} Artists</h1>
            <div className="flex flex-col space-y-2 items-center">
                {entries.map((entry) => {
                    return (
                        <Link key={entry._id} to={"/artist/" + entry["album"].artist.replace(' ', '%20')}>
                            <p className="bg-dark text-sm px-8 py-2 rounded-full shadow-md font-bold text-white transition duration-500 ease-in-out hover:bg-dark-1 transform hover:scale-110 w-40">
                                {entry["album"].artist}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default TopGenreArtistsList
