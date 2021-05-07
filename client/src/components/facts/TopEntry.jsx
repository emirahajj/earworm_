import { Link } from 'react-router-dom'
import Image from "../Image"
import LinkText from "../LinkText"

const TopEntry = (props) => {
    return (
        <div className="flex">
            <Image source={props.cover} />
            <div className="pl-4">
                <p className="text-sm">
                <Link to={"/albums/" + props.id}>
                    <LinkText text={props.title}/>
                </Link> by  
                <Link to={"/artist/" + props.artist.replace(' ', '%20')}>
                    <LinkText text={props.artist}/>
                </Link> was ranked the #1 album for this year. 
                <Link to={"/artist/" + props.artist.replace(' ', '%20')}>
                    <LinkText text={props.artist}/>
                </Link> is also known for {props.styles.join(", ")} music. </p>
            </div>
        </div>
    )
}

export default TopEntry
