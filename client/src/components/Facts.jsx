import PropTypes from "prop-types"
import TopEntry from "./facts/TopEntry"
import TopGenre from "./facts/TopGenre"
import MostAwarded from "./facts/MostAwarded"
import OldestAlbum from "./OldestAlbum"

const Facts = ({ topEntry, data, chartYear }) => {

    return (
        <div className="flex flex-row mt-12">
            <div className="w-96 space-y-8">
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
                <OldestAlbum
                    data={data[5]}
                    year={chartYear}
                />
            </div>
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
