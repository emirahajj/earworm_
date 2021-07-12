import {Link} from 'react-router-dom'
import ImageWithOverlay from "./ImageWithOverlay"

const Entry = (props) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4">
            <ImageWithOverlay source={props.cover} rank={props.rank} type= {"album"}/>
            <div className="md:ml-5 w-40 md:w-28">
                <Link className="font-bold block" to={"/albums/" + props.id}>{props.title}</Link>
                <Link className="text-gray-400" to={"/artist/" + props.artist.replace(' ', '%20')}>{props.artist}</Link>

                {/* <p className="text-gray-400">{props.artist}</p> */}
            </div>
        </div>
    )
}

export default Entry
