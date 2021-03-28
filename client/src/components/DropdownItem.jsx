const DropdownItem = (props) => {
    return (
        <div className="absolute transition duration-500 ease-in-out bg-dark hover:bg-dark-1 px-14 py-1 rounded-full font-bold shadow-md mt-20">
            {props.name}
        </div>
    )
}

export default DropdownItem
