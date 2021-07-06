import { Link } from 'react-router-dom'
import LinkText from "../components/LinkText"

const OldestAlbum = ({ data, year }) => {
    return (
        <div className="flex flex-row items-center text-md text-center">
            <div className="flex-shrink-0">
                <img src={data.img} alt="Album Cover" className="flex-none w-36 h-36 rounded-2xl overflow-hidden shadow-md object-cover transition duration-500 ease-in-out transform hover:scale-110" 
                />
            </div>
            <div className="w-80 text-sm px-6 text-left">
                <p>
                <Link to={"/albums/" + data._id}>
                    <LinkText text={data.title}/>
                </Link> was the oldest album on this year's chart.
                The album was <strong>{year - data.release}</strong> years old! </p>
            </div>
        </div>
    )
}

export default OldestAlbum
