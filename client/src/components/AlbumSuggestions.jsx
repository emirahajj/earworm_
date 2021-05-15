import { Link } from "react-router-dom"
import "../App.css"

const AlbumSuggestions = (props) => {
    return (
        <div>
            <div className="flex justify-start p-4 bg-dark  border-b border-white rounded">
                <Link to={"/albums/" + props.id}>
                    <p className="mt-4 text-lg font-bold">{props.title}</p>
                </Link>
            </div>
        </div>
    )
}

export default AlbumSuggestions
