import Image from "../components/Image"
import {Link} from 'react-router-dom'

const Entry = (props) => {
    return (
        <div className="flex items-center mb-8">
            <h1 className="bg-dark text-center mr-5 py-1 px-4 rounded-full font-bold shadow-md">{props.rank}</h1>
            <Image source={props.cover} />
            <div className="ml-5">
                <Link className="font-bold block" to={"/albums/" + props.id}>{props.title}</Link>
                <Link className="text-gray-400" to={"/artist/" + props.artist.replace(' ', '%20')}>{props.artist}</Link>

                {/* <p className="text-gray-400">{props.artist}</p> */}
            </div>
        </div>
    )
}

export default Entry
