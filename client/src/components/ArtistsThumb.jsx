import logo from "../img/icon.png"

const ArtistsThumb = (props) => {
    return (

        <div className="flex justify-center items-center ml-12 mb-8">
            <img className=" ml-12" src={logo} alt="Album Cover"></img>
            <div>
                <p className="ml-12 w-5">{props.name}</p>
            </div>
        </div>

    )
}

export default ArtistsThumb
