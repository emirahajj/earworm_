import { Link } from "react-router-dom"

const AlbumSnapshot = ({image, albumName, date, artistName, genre, description}) => {
    return (
        <div className="album-side flex flex-col max-w-md">
        <div className="">
            <img className="rounded-3xl" src={image} alt=""/>
        </div>
        <div className="flex flex-row w-full mt-3 justify-between">
            <h1 className="text-2xl lg:text-5xl font-bold">{albumName}</h1>
            <div className="flex flex-col place-self-center">
                <span className="">
                    <h1 className="text-2xl font-light" >{date}</h1>
                </span>
            </div>
        </div>
        <Link className="text-2xl text-gray-400" to={"/artists/"+ artistName.replace(" ", "-")}> {artistName}</Link>
        <p>{description}</p>
    </div>
    )
}

export default AlbumSnapshot
