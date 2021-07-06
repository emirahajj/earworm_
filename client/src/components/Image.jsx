import placeholder from "../img/placeholder-dark.png"

const Image = ({ source }) => {
    return (
        <img src={source === "N/A" ? placeholder : source} alt="Album Cover" className="flex-none w-36 h-36 rounded-2xl overflow-hidden shadow-md object-cover transition duration-500 ease-in-out transform hover:scale-110" />
    );
}
export default Image;

