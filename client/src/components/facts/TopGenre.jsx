import { Link } from 'react-router-dom'
import LinkText from "../LinkText"

const TopGenre = ({ topGenre, topGenreCount, otherGenres }) => {
    return (
        <div className="flex flex-row-reverse">
            <div className="pt-1">
                <p className="text-sm text-center">
                <Link to={"/genres/" + topGenre}>
                    <LinkText text={topGenre}/>
                </Link> was the most popular genre this year with <strong>{topGenreCount}</strong> entries in the top 200 albums. Other genres featured in this year's chart were {otherGenres.join(", ")}. </p>
            </div>
        </div>
    )
}

export default TopGenre
