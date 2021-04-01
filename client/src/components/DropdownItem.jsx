const DropdownItem = ({ text, onSwitch }) => {
    return (
        <button className="rounded-md px-4 py-1 text-white w-20 transition duration-500 ease-in-out hover:bg-dark-1 shadow-md focus:outline-none focus:bg-dark-1" 
        onClick={() => onSwitch(text)}>
            {text}
        </button>
    )
}

export default DropdownItem
