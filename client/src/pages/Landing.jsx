import Header from "../components/Header"
import Button from "../components/Button"

const Landing = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-center items-center flex-col">
                <div className="pt-10 pb-4">
                    <h2 className="text-3xl">All about the world of music</h2>
                </div>
                <div className="flex justify-between w-3/12">
                    <div>Explore</div>
                    <div>Discover</div>
                    <div>Analyze</div>
                </div>
                <Button text="Go" />
            </div>
        </div>
    )
}

export default Landing

