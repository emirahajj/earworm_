import DropdownItem from "../components/DropdownItem"

const DropdownList = (props) => {
    return (
        <div className="absolute fade-in-quick right-30 top-52 mt-3 py-2 w-44  bg-dark rounded-2xl shadow-xl z-20 font-bold text-center justify-center">
            <DropdownItem text="2020"/>
            <DropdownItem text="2019"/>
            <DropdownItem text="2018"/>
            <DropdownItem text="2017"/>
            <DropdownItem text="2016"/>
            <DropdownItem text="2015"/>
        </div>
    )
}

export default DropdownList
