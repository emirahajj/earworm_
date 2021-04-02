import DropdownItem from "../components/DropdownItem"

const DropdownList = (props) => {
    return (
        <div className="absolute mt-4 py-2 w-44 bg-dark rounded-2xl shadow-xl font-bold text-center justify-center">
            <DropdownItem onSwitch={props.onSwitch} year={2020}/>
            <DropdownItem onSwitch={props.onSwitch} year={2019}/>
            <DropdownItem onSwitch={props.onSwitch} year={2018}/>
            <DropdownItem onSwitch={props.onSwitch} year={2017}/>
            <DropdownItem onSwitch={props.onSwitch} year={2016}/>
            <DropdownItem onSwitch={props.onSwitch} year={2015}/>
            <DropdownItem onSwitch={props.onSwitch} year={2014}/>
            <DropdownItem onSwitch={props.onSwitch} year={2013}/>
            <DropdownItem onSwitch={props.onSwitch} year={2012}/>
            <DropdownItem onSwitch={props.onSwitch} year={2011}/>
            <DropdownItem onSwitch={props.onSwitch} year={2010}/>
            <DropdownItem onSwitch={props.onSwitch} year={2009}/>
            <DropdownItem onSwitch={props.onSwitch} year={2008}/>
            <DropdownItem onSwitch={props.onSwitch} year={2007}/>
        </div>
    )
}

export default DropdownList
