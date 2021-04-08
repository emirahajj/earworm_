import svg from '../img/grammy.svg'

const GrammyRecap = (props) => {
    return (
        <div className="flex flex-row mt-10 mb-10">
        {props.awards.length > 0 ?  
            (<div>
                <h1 className="font-bold text-center text-3xl">Awards</h1>
                <p className="mb-4 font-thin">This album garnered {props.awards.length} Grammy's for {props.artist}</p>
                {props.awards.map((awardObj)=>{
                    return <h1 className=" bg-dark-1 bg-opacity-80 text-center mr-5 py-1 px-4 my-2 rounded-full font-bold w-full shadow-md">{awardObj.award} ({awardObj.year})</h1>
                })}
            </div>) : <p></p>
            }
        </div>
    )
}

export default GrammyRecap
