import NavItem from "./NavItem"
import { Link } from "react-router-dom"
import Search from "./Search"

const Navbar = () => {
    return (
        <div>
            <nav className="md:flex justify-between w-screen hidden md:visible">
                <ul className="flex flex-col md:flex-row font-bold">
                        <Link to="/home"><NavItem text="Home" /></Link>
                        <Link to="/artists/A"><NavItem text="Artists" /></Link>
                        <Link to="/genres"><NavItem text="Genres" /></Link>
                        <Link to="/about"><NavItem text="About" /></Link>
                </ul>
                <div>
                    <Search className="justify-end"/>
                </div>
            </nav>
            <nav className="flex blah justify-between w-screen sm:visible md:hidden">
                <ul className="flex flex-col md:flex-row font-bold">
                        <Link to="/home"><NavItem text="Home" /></Link>
                        <Link to="/artists/A"><NavItem text="Artists" /></Link>
                        <Link to="/genres"><NavItem text="Genres" /></Link>
                        <Link to="/about"><NavItem text="About" /></Link>
                </ul>
                {/* <div className="sm:hidden">
                    <SearchBox className="justify-end"/>
                </div> */}
            </nav>
        </div>

    )
}

export default Navbar
