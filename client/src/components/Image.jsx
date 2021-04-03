import placeholder from "../img/placeholder-dark.png"

const Image = ({ source }) => {
    return (
        <img src={source === "N/A" ? placeholder : source} alt="Album Cover" className="flex-none w-24 h-24 rounded-2xl overflow-hidden shadow-md object-cover" />
    );
}
export default Image;

