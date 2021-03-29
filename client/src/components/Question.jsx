import "../App.css"

const Question = (props) => {
    return (
        <div>
            <p className="text-center text-gray-300">{props.question}</p>
            <p className="text-center text-gray-300">{props.answer}</p>
        </div>
    )
}

export default Question;