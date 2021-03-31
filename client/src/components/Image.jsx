import album from "../img/album-cover.jpg"

const Image = (props) => {
    return (
        <div className="container">
                <a href="#">
                    <img src={props.src} className= "w-40 h-40" alt="Artist" />
                </a>
                <div className="content py-6">
                    <h4 className="text-white font-semibold">{props.name}</h4>
                    <p className="text-white">{props.genre}</p>
                </div>
        </div>
    );
}
export default Image;

