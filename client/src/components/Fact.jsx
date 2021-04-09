import placeholder from "../img/placeholder-dark.png"
import Image from "../components/Image"

const Fact = ({ position, title, artist, cover, genre, styles, other }) => {
    return (
        position === "right" ?
            <div className="flex flex-row-reverse mt-10 mb-10 w-96">
                <Image source={placeholder} />
                <div className="pt-1 pr-4">
                    <p className="text-sm"><strong>{title}</strong> by <strong>{artist}</strong> was ranked the #1 album for this year. It's a <strong>{genre}</strong> album which means this genre was popular. </p>
                </div>
            </div> :
            <div className="flex mt-10 mb-10 w-96">
                <Image source={cover} />
                <div className="pl-4">
                    <p className="text-sm"><strong>{title}</strong> by <strong>{artist}</strong> was ranked the #1 album for this year. <strong>{artist}</strong> is also known for {styles.join(", ")} music. </p>
                </div>
            </div>
    )
}

export default Fact
