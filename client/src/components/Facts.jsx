import TopEntry from "./facts/TopEntry"
import TopGenre from "./facts/TopGenre"
import TopGenreArtistsList from "../components/TopGenreArtistsList"

const Facts = ({ topEntry, topGenre }) => {

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
                    topGenreData={topGenre}
                />
            </div>
            <TopGenreArtistsList />
        </div>
    )
}

export default Facts
