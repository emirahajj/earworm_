import PropTypes from "prop-types"
import TopEntry from "./facts/TopEntry"
import TopGenre from "./facts/TopGenre"
import MostAwarded from "./facts/MostAwarded"

const Facts = ({ topEntry, data }) => {

    return (
        <div className="flex flex-row mt-2">
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
                <MostAwarded 
                    mostAwarded={data[3]}
                    moreMostAwarded={data[4]}
                />
            </div>
            {/*<TopGenreArtistsList 
                genre={data[0]} 
                entries={topGenreEntries}
            />*/}
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
