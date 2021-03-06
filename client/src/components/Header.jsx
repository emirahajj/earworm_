import logo from "../img/icon.png"
import "../App.css"

const Header = () => {
    return (
        <header className="text-6xl font-bold">
            <div className="flex justify-center items-center bg-dark px-16 py-7 shadow-md space-x-7 h-40">
                <h1 className="fade-in">Earworm</h1>
                <img src={logo} alt="Logo" className="fade-in"></img>
            </div>
        </header>
    )
}

export default Header