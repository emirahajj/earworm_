import placeholder from "../img/placeholder-dark.png"
import Image from "../components/Image"

const Fact = ({ position }) => {
    return (
        <div className="flex mt-10 mb-10">
            <Image source={placeholder} />
            <div className="pt-1">
                <p className="pl-4 font-bold">Relapse</p>
                <p className="pl-4 text-sm">Eminem</p>
            </div>
        </div>
    )
}

export default Fact
