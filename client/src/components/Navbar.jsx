import NavItem from "./NavItem"
import { Link } from "react-router-dom"
import SearchBox from "./searchBox"

const Navbar = () => {
    return (
        <nav>
            <ul className="flex justify-between font-bold">
                <div className="flex px-10 py-4 space-x-8 ">
                    <Link to="/home"><NavItem text="Home" /></Link>
                    <Link to="/artists/A"><NavItem text="Artists" /></Link>
                    <Link to="/genres"><NavItem text="Genres" /></Link>
                    <Link to="/about"><NavItem text="About" /></Link>
                </div>
                <div>
                    <SearchBox className="flex justify-start"/>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
