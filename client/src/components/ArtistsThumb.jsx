import ArtistsThumbImg from "./ArtistsThumbImg"

const ArtistsThumb = (props) => {
    return (

        <div className="flex justify-start items-center ml-12 mb-8">
            <ArtistsThumbImg name={props.name} />
            <div>
                <p className="ml-6 w-5">{props.name}</p>
            </div>
        </div>

    )
}

export default ArtistsThumb
