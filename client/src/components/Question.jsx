import "../App.css"

const Question = (props) => {
    return (
        <div className="my-4">
            <p className="text-center text-xl mb-2 font-bold text-gray-200">{props.question}</p>
            <p className="text-center text-gray-300">{props.answer}</p>
        </div>
    )
}

export default Question;