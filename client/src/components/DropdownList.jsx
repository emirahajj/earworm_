import DropdownItem from "../components/DropdownItem"
import SimpleBarReact from "simplebar-react"
import "simplebar/src/simplebar.css"

const DropdownList = (props) => {

    var years = []
    
    for (let y = 2020; y >= 1970; y--) {
        years.push(y)
    }

    return (
        <div className="absolute mt-4 py-2 w-44 bg-dark rounded-2xl shadow-xl font-bold text-center justify-center">
            <SimpleBarReact style={{ maxHeight: 250 }}>
                {years.map((year) => {
                    return (
                        <DropdownItem
                            onSwitch={props.onSwitch}
                            year={year}
                        />
                    )
                })}
            </SimpleBarReact>
        </div>
    )
}

export default DropdownList
