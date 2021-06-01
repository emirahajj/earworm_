import { Link } from "react-router-dom"
import "../App.css"

const SearchResult = (props) => {
    return (
        <div className = "absolute z-10">
            {props.type === "artist" ?
                    props.results.map(result =>
                        <div className="flex p-4 bg-dark border-b border-white rounded">
                        <Link to={"/artist/" + result.name}>
                            <p className="mt-4 text-lg font-bold">{result.name}</p>
                        </Link>
                        </div>
                    )
                :
                props.results.map(result =>
                    <div className="flex p-4 bg-dark border-b border-white rounded">
                    <Link to={"/album/" + result._id}>
                        <p className="mt-4 text-lg font-bold">{result.title}</p>
                    </Link>
                    </div>
                )
            }
        </div>)
}

export default SearchResult