import { Link } from 'react-router-dom'
import LinkText from "../components/LinkText"

const OldestAlbum = ({ data, year }) => {
    return (
        <div className="flex flex-col mt-20 items-center text-md text-center">
            <div>
                <img src={data.img} alt="Album Cover" className="flex-none w-48 h-48 rounded-2xl overflow-hidden shadow-md object-cover transition duration-500 ease-in-out transform hover:scale-110" 
                />
            </div>
            <div className="mt-3 w-80">
                <p>
                <Link to={"/albums/" + data._id}>
                    <LinkText text={data.title}/>
                </Link> by
                <Link to={"/artist/" + data.artist}>
                    <LinkText text={data.artist}/>
                </Link> was the oldest album on this year's chart.
                The album was <strong>{year - data.release}</strong> years old! </p>
            </div>
        </div>
    )
}

export default OldestAlbum
