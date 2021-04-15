import React from 'react'

const LinkText = ({ text }) => {
    return (
        <strong className="hover:text-gray-400 transition duration-500 ease-in-out"> {text}</strong>
    )
}

export default LinkText
