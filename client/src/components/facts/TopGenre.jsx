import { Link } from 'react-router-dom'
import LinkText from "../LinkText"

const TopGenre = ({ topGenreData }) => {
    return (
        <div className="flex flex-row-reverse">
            <div className="pt-1">
                <p className="text-sm text-center">
                <Link to={"/genres/" + topGenreData[0]}>
                    <LinkText text={topGenreData[0]}/>
                </Link> was the most popular genre this year with <strong>{topGenreData[1]}</strong> entries in the top 10 albums. Other genres featured in this year's top 10 albums were {topGenreData[2].join(", ")}. </p>
            </div>
        </div>
    )
}

export default TopGenre
