import Image from "./Image"
import { Link } from 'react-router-dom'
import LinkText from "./LinkText"

const Fact = ({ position, title, id, artist, cover, genre, styles, topGenre }) => {
    return (
        position === "right" ?
            <div className="flex flex-row-reverse mt-8 w-96">
                {/*<Image source={placeholder} />*/}
                <div className="pt-1">
                    <p className="text-sm text-center">
                    <Link to={"/genres/" + topGenre[0]}>
                        <LinkText text={topGenre[0]}/>
                    </Link> was the most popular genre this year with <strong>{topGenre[1]}</strong> entries in the top 10 albums. Other genres featured in this year's top 10 albums were {topGenre[2].join(", ")}. </p>
                </div>
            </div> :
            <div className="flex w-96">
                <Image source={cover} />
                <div className="pl-4">
                    <p className="text-sm">
                    <Link to={"/albums/" + id}>
                        <LinkText text={title}/>
                    </Link> by  
                    <Link to={"/artists/" + artist.replace(' ', '-')}>
                        <LinkText text={artist}/>
                    </Link> was ranked the #1 album for this year. 
                    <Link to={"/artists/" + artist.replace(' ', '-')}>
                        <LinkText text={artist}/>
                    </Link> is also known for {styles.join(", ")} music. </p>
                </div>
            </div>
    )
}

export default Fact
