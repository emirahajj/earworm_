import PropTypes from "prop-types"
import TopEntry from "./facts/TopEntry"
import TopGenre from "./facts/TopGenre"
import MostAwarded from "./facts/MostAwarded"
import TopGenreArtistsList from "../components/TopGenreArtistsList"

const Facts = ({ topEntry, data }) => {

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
            <TopGenreArtistsList />
        </div>
    )
}

Facts.defaultProps = {
    topEntry: {},
    topGenre: []
}

Facts.propTypes = {
    topEntry: PropTypes.object,
    topGenre: PropTypes.array
}

export default Facts
