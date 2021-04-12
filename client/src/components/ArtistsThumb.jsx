import ArtistsThumbImg from "./ArtistsThumbImg"
import { Link } from "react-router-dom"
import "../App.css"

const ArtistsThumb = (props) => {
    return (

        <div>
            <div className="flex justify-center">
                <div className="flex-none w-48 h-48 rounded-2xl overflow-hidden shadow-md fade-in">
                    <Link to={"/artists/" + props.name.replace(' ', '-')}>
                        <ArtistsThumbImg name={props.name} />
                    </Link>
                </div>


            </div>
            <div className="flex justify-center mb-7">
                <Link to={"/artists/" + props.name.replace(' ', '-')}>
                    <p className="mt-4 text-lg font-bold">{props.name}</p>
                </Link>
            </div>
        </div>



    )
}

export default ArtistsThumb
