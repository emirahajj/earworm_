import { Link } from "react-router-dom"
import "../App.css"

const SearchResult = (props) => {
    return (
        <div className = "search absolute z-50 w-full px-5 mt-12 rounded-lg md:w-80 md:px-0 rounded-lg hidden">
            {props.type === "artist" ?
                    props.results.map(result =>
                        <div className="flex flex-row p-2 bg-dark border-b border-gray-500">
                            <img className= "w-12 h-12 mr-2" src={result.image} alt="" />
                            <Link to={"/artist/" + result.name}>
                                <p id="result" className="text-lg font-bold leading-6">{result.name}</p>
                                <p className="text-sm text-gray-3">{result.genres}</p>
                            </Link>
                        </div>
                    )
                :
                props.results.map(result =>
                    <div className="flex p-4 bg-dark border-b border-gray-500">
                        <img className= "w-12 h-12 mr-2" src={result.img} alt="" />
                        <Link to={"/albums/" + result._id}>
                            <p id="result" className=" text-lg font-bold">{result.title}</p>
                            <p className="text-sm text-gray-3">{result.artist}</p>
                        </Link>
                    </div>
                )
            }
        </div>)
}

export default SearchResult
