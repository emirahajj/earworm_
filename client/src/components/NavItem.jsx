import { useLocation } from "react-router-dom"

const NavItem = (props) => {
    var highlight = false;
    const location = useLocation()

    // Find index of "/" when a path has a subpath
    // Example: artists/A
    var slashIndex = location.pathname.slice(1).indexOf("/")

    if (props.text.toLowerCase() === location.pathname.slice(1) ||
        props.text.toLowerCase() === location.pathname.slice(1, slashIndex + 1) ||
        props.text.toLowerCase() === location.pathname.slice(1, slashIndex + 1) + "s")
    {
        highlight = true;
    }

    return <p className={"py-2 px-4 rounded-full transition duration-500 ease-in-out " + (highlight ? 'bg-dark shadow-md' : 'hover:bg-dark hover:shadow-md')}>{props.text}</p>
}

export default NavItem
