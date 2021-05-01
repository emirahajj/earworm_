import React from 'react'

const TopGenreArtistsList = ({ genre, artists }) => {
    return (
        <div className=" ml-10 font-bold text-sm text-center">
            <h1 className="px-5 py-3 mb-2 bg-dark rounded-full shadow-md ">Top Rap Artists</h1>
            <div className="space-y-2">
                <p>Post Malone</p>
                <p>Lil Baby</p>
                <p>Roddy Rich</p>
            </div>
        </div>
    )
}

export default TopGenreArtistsList
