import { Link } from "react-router-dom"
import "../App.css"

const SuggestedList = (props) => {
    return (
        <div>
            <div className="flex justify-start p-4 bg-dark  border-b border-white rounded">
                <Link to={"/artist/" + props.name.replace(' ', '-')}>
                    <p className="mt-4 text-lg font-bold">{props.name}</p>
                </Link>
            </div>
        </div>
    )
}

export default SuggestedList
