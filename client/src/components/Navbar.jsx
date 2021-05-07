import NavItem from "./NavItem"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul className="flex px-10 py-4 space-x-8 font-bold">
                <Link to="/home"><NavItem text="Home" /></Link>
                <Link to="/artists/A"><NavItem text="Artists" /></Link>
                <Link to="/genres"><NavItem text="Genres" /></Link>
                <Link to="/about"><NavItem text="About" /></Link>
            </ul>
        </nav>
    )
}

export default Navbar
