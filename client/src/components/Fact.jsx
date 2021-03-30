import Image from "../components/Image"

const Fact = ({ position }) => {
    return (
        <div className="flex mt-10 mb-10">
            <Image />
            <div className="pt-1">
                <p className="pl-4 font-bold"> My turn</p>
                <p className="pl-4 text-sm">Lil Baby</p>
            </div>
        </div>
    )
}

export default Fact
