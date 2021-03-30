import logo from "../img/concert.jpeg"
import "../App.css"

const TeamProfile = (props) => {
    return (
        <div className="w-48 text-center mx-4">
            <a href={props.link}><img src={props.img} alt="of member" className=" rounded-2xl"/></a>
                <h1 className="my-3 text-xl font-bold">{props.name}</h1>
            <p className="my-2">{props.role}</p>
            <p>{props.bio}</p>
        </div>
    )
}

export default TeamProfile