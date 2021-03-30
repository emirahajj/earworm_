import Header from "../components/Header"
import { Link } from "react-router-dom"
import "../App.css"

const Landing = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-center items-center flex-col font-bold fade-in">
                <div className="pt-24 pb-4">
                    <h2 className="text-3xl">All about the world of music</h2>
                </div>
                <div className="flex space-x-10 justify-center w-3/12 pt-3">
                    <div>Explore</div>
                    <div>Discover</div>
                    <div>Analyze</div>
                </div>
                <Link className="m-12 bg-dark text-md px-8 py-3 rounded-full shadow-md font-bold text-white transition duration-500 ease-in-out hover:bg-dark-1" to="/home">
                    Go
                </Link>

            </div>
        </div>
    )
}

export default Landing

