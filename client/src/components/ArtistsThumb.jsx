import ArtistsThumbImg from "./ArtistsThumbImg"
import { Link } from "react-router-dom"
import "../App.css"

const ArtistsThumb = (props) => {
    return (
        <div>
            <div className="flex justify-center">

                <Link to={"/artists/" + props.name.replace(' ', '-')}>
                    <ArtistsThumbImg name={props.name} />
                </Link>

            </div>
            <div className="flex justify-center mb-8 fade-in">
                <Link to={"/artists/" + props.name.replace(' ', '-')}>
                    <p className="mt-4 text-lg font-bold">{props.name}</p>
                </Link>
            </div>
        </div>
    )
}

export default ArtistsThumb
