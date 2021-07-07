import beats from "../img/beats.jpg"
import "../App.css"

const ArtistCard = () => {
    return (
        <div className="p-12 h-full">
            <div className="relative w-full">
                <img src={beats} alt="" className="rounded-3xl"/>
                <h1 className="absolute bottom-4 left-4 text-6xl font-bold">Artist Name</h1>
            </div>
            <div>
                <p className="my-6">Austin Richard Post (born July 4, 1995), known by his stage name Post Malone, is an American singer, songwriter, rapper, record producer and guitarist. He first gained major recognition in February 2015, after the release of his debut single "White Iverson". In August 2015, Malone landed a record deal with Republic Records. Post Malone was born Austin Richard Post on July 4, 1995, in Syracuse, New York. When he was 10 years old, he and his family moved to Dallas, Texas.</p>
                <h1 className="text-center text-2xl font-bold">ArtistName has X albums on the Billboard 200 Year End Charts</h1>
            </div>
        </div>
    )
}

export default ArtistCard