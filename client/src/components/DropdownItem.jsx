const DropdownItem = ({ text }) => {
    return (
        <button className="rounded-md px-4 py-1 text-white  transition duration-500 ease-in-out hover:bg-dark-1 shadow-md focus:outline-none focus:bg-dark-1">
            {text}
        </button>
    )
}

export default DropdownItem
