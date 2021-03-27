const Dropdown = () => {
    return (
        <div className="text-center">
            <select name="years" id="years" className="bg-dark mt-5">
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
            </select>
        </div>
    )
}

export default Dropdown
