import album from "../img/album-cover.jpg"

const Image = (props) => {
    return (
        <img src={album} alt="Album Cover" className="flex-none w-24 h-24 rounded-2xl overflow-hidden shadow-md"/>
    );
}
export default Image;

