import Image from "../components/Image"

const Entry = (props) => {
    return (
        <div className="flex items-center mb-8">
            <h1 className="bg-dark text-center mr-5 py-1 px-4 rounded-full font-bold shadow-md">{props.rank}</h1>
            <Image source={props.cover} />
            <div>
                <p className="pl-5 font-bold">{props.title}</p>
                <p className="pl-5">{props.artist}</p>
            </div>
        </div>
    )
}

export default Entry
