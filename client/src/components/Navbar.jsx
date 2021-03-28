import NavItem from "./NavItem"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul className="flex px-10 py-4 space-x-8 font-bold">
                <Link to="/home"><NavItem text="Home" /></Link>
                <Link to="/artists"><NavItem text="Artists" /></Link>
                <NavItem text="Genres" />
                <NavItem text="About" />
            </ul>
        </nav>
    )
}

export default Navbar
