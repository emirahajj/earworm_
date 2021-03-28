import React, { useState } from "react"

const downArrow = {
    width: "0",
    height: "0",
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderTop: "8px solid #fff",
}

const Dropdown = (props) => {

    const [open, setOpen] = useState(false)

    return (
        <div className="flex justify-center items-center">
            <button className="flex items-center space-x-2 transition duration-500 ease-in-out bg-dark hover:bg-dark-1 px-14 py-1 mt-3 rounded-full font-bold focus:outline-none shadow-md"
            onClick={() => setOpen(!open)}>
                <p>2020</p>
                <div style={downArrow}></div>
            </button>

            {open && props.children}
        </div>
    )
}

export default Dropdown
