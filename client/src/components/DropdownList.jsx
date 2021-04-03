import DropdownItem from "../components/DropdownItem"

const DropdownList = (props) => {

    var years = []
    
    for (let y = 2020; y >= 1970; y--) {
        years.push(y)
    }

    return (
        <div className="absolute mt-4 py-2 w-44 bg-dark rounded-2xl shadow-xl font-bold text-center justify-center h-96 overflow-auto">
            {years.map((year) => {
                return (
                    <DropdownItem
                        onSwitch={props.onSwitch}
                        year={year}
                    />
                )
            })}
        </div>
    )
}

export default DropdownList
