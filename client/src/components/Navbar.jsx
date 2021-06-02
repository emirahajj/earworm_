import NavItem from "./NavItem"
import { Link } from "react-router-dom"
import Search from "./Search"
import { slide as Menu } from 'react-burger-menu'
import logo from "../img/icon.png"

const Navbar = () => {
    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '20px',
          top: '20px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%',
        },
        bmMenu: {
          background: '#282828',          
          padding: '2em 1em 0',
          fontSize: '1.15em',
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      };

    return (
        <div>
            <nav className="md:flex justify-between w-screen hidden md:visible">
                <ul className="flex flex-col md:flex-row font-bold px-10 py-4 space-x-8">
                        <Link to="/home"><NavItem text="Home" /></Link>
                        <Link to="/artists/A"><NavItem text="Artists" /></Link>
                        <Link to="/genres"><NavItem text="Genres" /></Link>
                        <Link to="/about"><NavItem text="About" /></Link>
                </ul>
                <div>
                    <Search className="justify-end"/>
                </div>
            </nav>
            
            <div className ="visible md:hidden">
                <Menu styles={styles}>
                    <h1 className="font-bold text-white text-center text-4xl mb-2">earworm</h1>
                    <Link to="/home"><NavItem text="Home" /></Link>
                    <Link to="/artists/A"><NavItem text="Artists" /></Link>
                    <Link to="/genres"><NavItem text="Genres" /></Link>
                    <Link to="/about"><NavItem text="About" /></Link>
                    <Search/>
                </Menu>
            </div>
            {/* <nav className="flex blah justify-between w-screen sm:visible md:hidden">
                <ul className="flex flex-col md:flex-row font-bold">
                        <Link to="/home"><NavItem text="Home" /></Link>
                        <Link to="/artists/A"><NavItem text="Artists" /></Link>
                        <Link to="/genres"><NavItem text="Genres" /></Link>
                        <Link to="/about"><NavItem text="About" /></Link>
                </ul>
            </nav> */}
        </div>

    )
}

export default Navbar
