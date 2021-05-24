import "../App.css"
import github from "../img/github.png"
import external from "../img/external-link-symbol.png"



const TeamProfile = (props) => {
    return (
        <div className="w-48 text-center mx-4 sm:pb-8">
            <img src={props.img} alt="of member" className=" rounded-2xl" />
            <h1 className="my-3 text-xl font-bold">{props.name}</h1>
            <div className="flex flex-row justify-center">
                <a href={props.github}><img className="w-6 mx-2" src={github} alt="" /></a>
                <a href={props.link}><img className="w-6 mx-2" src={external} alt="" /></a>
            </div>
            <p className="my-2">{props.role}</p>


            <p>{props.bio}</p>
        </div>
    )
}

export default TeamProfile