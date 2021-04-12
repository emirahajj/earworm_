

const ChartPosRecap = (props) => {
    return (
        <div className="flex flex-col mt-10">
            <h1 className="font-bold text-3xl text-center mt-5">Chart History</h1>
            <h1 className="text-center font-thin mt-3 mb-4">This album has charted {props.positions.length} {props.positions.length > 1 ? 'times' : 'time'}</h1>
            {props.positions.map((position) => {
                return (
                    <div className="flex flex-row justify-center">
                        <h1 className="bg-dark text-center mr-5 py-1 px-4 my-1 rounded-full font-bold w-20 shadow-md">{position.year}</h1>
                        <h1 className="bg-gray-400  text-gray-900 text-center py-1 px-1 my-1 rounded-full font-bold w-16 shadow-md">#{position.rank}</h1>
                    </div>)
            })}
        </div>
    )
}

export default ChartPosRecap
