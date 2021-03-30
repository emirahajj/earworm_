import DropdownItem from "../components/DropdownItem"

const DropdownList = (props) => {
    return (
        <div className="absolute mt-4 py-2 w-44 bg-dark rounded-2xl shadow-xl z-20 font-bold text-center justify-center">
            <DropdownItem onSwitch={props.onSwitch} text={2020}/>
            <DropdownItem onSwitch={props.onSwitch} text={2019}/>
            <DropdownItem onSwitch={props.onSwitch} text={2018}/>
            <DropdownItem onSwitch={props.onSwitch} text={2017}/>
            <DropdownItem onSwitch={props.onSwitch} text={2016}/>
            <DropdownItem onSwitch={props.onSwitch} text={2015}/>
        </div>
    )
}

export default DropdownList
