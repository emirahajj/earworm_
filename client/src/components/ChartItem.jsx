import logo from "../img/icon.png"

const ChartItem = (props) => {
    return (
        <div className="flex items-center mb-8">
            <h1 className="bg-gray-3 text-center mr-5 px-3 py-1 rounded-full font-bold">1</h1>
            <img src={logo} alt="Album Cover"></img>
            <div>
                <p className="pl-5">Album Title</p>
                <p className="pl-5">Artist Name</p>
            </div>
        </div>
    )
}

export default ChartItem
