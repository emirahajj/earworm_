import Header from "../components/Header"
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-center items-center flex-col text-indigo-400 font-bold">
                <div className="pt-16 pb-4">
                    <h2 className="text-3xl">All about the world of music</h2>
                </div>
                <div className="flex space-x-20 justify-center w-3/12">
                    <div>Explore</div>
                    <div>Discover</div>
                    <div>Analyze</div>
                </div>
                <Link className="m-12 bg-indigo-700 px-8 py-2 rounded-full shadow-md font-bold" to="/home">
                    Go
                </Link>

            </div>
        </div>
    )
}

export default Landing

