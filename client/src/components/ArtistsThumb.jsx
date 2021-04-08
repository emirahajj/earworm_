import ArtistsThumbImg from "./ArtistsThumbImg"
import { Link } from "react-router-dom"

const ArtistsThumb = (props) => {
    return (
        <Link to={"/artists/" + props.name.replace(' ', '-')}>
            <div className="flex justify-start items-center ml-5 mb-8">
                <div className="flex-none w-24 h-24 rounded-2xl overflow-hidden shadow-md ml-12">
                    <ArtistsThumbImg name={props.name} />
                </div>
                <div>
                    <p className="ml-6 w-5">{props.name}</p>
                </div>
            </div>
        </Link>
    )
}

export default ArtistsThumb
