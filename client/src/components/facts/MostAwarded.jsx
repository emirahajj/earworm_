import { Link } from 'react-router-dom'
import LinkText from "../LinkText"
import Image from "../Image"

const MostAwarded = ({ mostAwarded, moreMostAwarded}) => {
    return (
        moreMostAwarded.length === 0 ?
        <div className="flex flex-row-reverse items-center">
            <Image source={mostAwarded.img} />
            <p className="text-sm text-right pr-4">
                <Link to={"/albums/" + mostAwarded._id}>
                    <LinkText text={mostAwarded.title}/>
                </Link> by  
                <Link to={"/artist/" + mostAwarded.artist.replace(' ', '%20')}>
                    <LinkText text={mostAwarded.artist}/>
                </Link> was the most Grammy awarded album this chart year with a total of <strong>{mostAwarded.awards.length}</strong> awards.
            </p>
        </div> :
        <div className="flex flex-col items-center">
            <div className="flex flex-row space-x-3 mb-3">
                <Image source={mostAwarded.img} />
                {moreMostAwarded.map((anotherMostAwarded) => {
                    return ( <Image key={anotherMostAwarded["album"]._id} source={anotherMostAwarded["album"].img} /> )
                })}
            </div>
            <p className="text-sm text-center">
                <Link to={"/albums/" + mostAwarded._id}>
                    <LinkText text={mostAwarded.title}/>
                </Link> by  
                <Link to={"/artist/" + mostAwarded.artist.replace(' ', '%20')}>
                    <LinkText text={mostAwarded.artist}/>
                </Link>
                {moreMostAwarded.map((anotherMostAwarded, index) => {
                    if(index === moreMostAwarded.length-1) {
                        return ( 
                            <span> and 
                            <Link to={"/albums/" + anotherMostAwarded["album"]._id}>
                                <LinkText text={anotherMostAwarded["album"].title}/>
                            </Link> by  
                            <Link to={"/artist/" + anotherMostAwarded["album"].artist.replace(' ', '%20')}>
                                <LinkText text={anotherMostAwarded["album"].artist}/>
                            </Link>
                            </span> 
                        )
                    } else {
                        return ( 
                            <span>, 
                            <Link to={"/albums/" + anotherMostAwarded["album"]._id}>
                                <LinkText text={anotherMostAwarded["album"].title}/>
                            </Link> by  
                            <Link to={"/artist/" + anotherMostAwarded["album"].artist.replace(' ', '%20')}>
                                <LinkText text={anotherMostAwarded["album"].artist}/>
                            </Link>
                            </span> 
                        )
                    }
                })} were the albums that had the most awards on this year's chart with each having a total of <strong>{mostAwarded.awards.length}</strong> awards.
            </p>
        </div>
    )
}

export default MostAwarded
