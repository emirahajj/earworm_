import { Link } from "react-router-dom"
import "../App.css"

const AlbumSuggestions = (props) => {
    return (
            <div className="flex p-4 bg-dark  border-b border-white rounded">
                <Link to={"/albums/" + props.id}>
                    <p className="mt-4 text-lg font-bold">{props.title}</p>
                    <h6 className="text-sm text-gray-400">{props.artist}</h6>
                </Link>
            </div>
    )
}

export default AlbumSuggestions
