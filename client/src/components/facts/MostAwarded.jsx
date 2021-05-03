import Image from "../Image"

const MostAwarded = ({ mostAwarded, moreMostAwarded}) => {
    console.log(mostAwarded)
    console.log(moreMostAwarded.length)
    return (
        moreMostAwarded.length === 0 ?
        <div className="flex flex-row-reverse items-center">
            <Image source={mostAwarded.img} />
            <p className="text-sm text-right pr-4">
                <strong>{mostAwarded.title}</strong> by <strong>{mostAwarded.artist}</strong> was the album that had the most awards on this year's chart with a total of <strong>{mostAwarded.awards.length}</strong> awards. The album was released in <strong>{mostAwarded.release}</strong>.
            </p>
        </div> :
        <div className="flex flex-col items-center">
            <div className="flex flex-row space-x-3 mb-3">
                <Image source={mostAwarded.img} />
                {moreMostAwarded.map((anotherMostAwarded) => {
                    return ( <Image source={anotherMostAwarded["album"].img} /> )
                })}
            </div>
            <p className="text-sm text-center">
                <strong>{mostAwarded.title}</strong> by <strong>{mostAwarded.artist}</strong>  {moreMostAwarded.map((anotherMostAwarded, index) => {
                    if(index === moreMostAwarded.length-1) {
                        return ( <span>and <strong>{anotherMostAwarded["album"].title}</strong> by <strong>{anotherMostAwarded["album"].artist}</strong></span> )
                    } else {
                        return ( <span>, <strong>{anotherMostAwarded["album"].title}</strong> by <strong>{anotherMostAwarded["album"].artist}</strong></span> )
                    }
                })} were the albums that had the most awards on this year's chart with each having a total of <strong>{mostAwarded.awards.length}</strong> awards.
            </p>
        </div>
    )
}

export default MostAwarded
