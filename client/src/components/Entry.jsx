import logo from "../img/icon.png"

const Entry = (props) => {
    return (
        <div className="flex items-center mb-8">
            <h1 className="bg-dark text-center mr-5 w-10 py-1 rounded-full font-bold shadow-md">{props.id}</h1>
            <img src={logo} alt="Album Cover"></img>
            <div>
                <p className="pl-5">{props.title}</p>
                <p className="pl-5">{props.artist}</p>
            </div>
        </div>
    )
}

export default Entry
