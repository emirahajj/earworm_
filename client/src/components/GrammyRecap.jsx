
import GrammyComponent from '../components/GrammyComponent'

const GrammyRecap = (props) => {
    return (
        <div className="flex flex-row justify-center  bg-opacity-90 rounded-3xl bg-dark-1 mt-10 mb-10">
        {props.awards.length > 0 ?  
            (<div className="my-2">
                <h1 className="font-bold text-center text-3xl">Awards</h1>
                <div className="flex flex-row my-4 justify-center">
                    {props.awards.map(element => {
                        return <GrammyComponent/>
                    })}
                </div>
                <p className="mb-4 text-center font-thin">This album won {props.awards.length} Grammy's at the {props.awards[0].year} Grammy's</p>
                {props.awards.map((awardObj)=>{
                    return <div>
                            <h1 className=" bg-gray-2 text-center mr-5 py-1 px-4 my-2 rounded-2xl w-full shadow-md">{awardObj.award}</h1>
                            </div>
                })}
            </div>) : <p></p>
            }
        </div>
    )
}

export default GrammyRecap
