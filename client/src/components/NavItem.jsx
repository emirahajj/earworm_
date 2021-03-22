import { useLocation } from "react-router-dom"

const NavItem = (props) => {
    var highlight = false;
    const location = useLocation()

    if (props.text.toLowerCase() === location.pathname.slice(1)) {
        highlight = true;
    }

    return <li className={"py-2 px-4 rounded-full " + (highlight ? 'bg-dark' : 'hover:bg-dark')}>{props.text}</li>
}

export default NavItem
