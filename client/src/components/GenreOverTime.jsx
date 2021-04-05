import "../App.css"
import {useEffect, useState} from 'react'
import { fetsGenreHistory, fetchAllAlbumsInGenre } from "../api";
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area} from 'recharts'


const GenreOverTime = (props) => {
    const [value, setValue] = useState(props.genre);
    const [history, setHistory] = useState([]);
    const [number, setNumber] = useState(0);
    const [condensedHistory, setCondensedHistory] = useState([]);

    const makeArray = () =>{
      return Array.from({length : 51}, (_, i)=> i + 1970);
    }

    useEffect(() => {
      fetchAllAlbumsInGenre(value).then((res)=>{
        setNumber(res.data.length);
      })

    }, [value])

          
    useEffect(() => {
      fetsGenreHistory(value).then((res)=>{
        setHistory(res.data);


      })
      }, [value])

      useEffect(() => {

        let yearArray = makeArray();
        //function to add missing "dummy" data values since incoming data misses years
        //when there are no albums of a certain genre 
        const addMissingYearStat = (array, input) => {
          const get = (year) => { return find(year) || make(year)}
          const find = (year) => { return input.find((x)=> {return parseInt(x.year) === year})};
          const make = (year) => { return {year: year.toString(), count: 0}}
          return array.map(get);
        }

        const grouped = history.reduce((groups, cur)=> {
            const key = cur.year;
            groups[key] = (groups[key] || 0) + 1;
            return groups;
        }, {});

        const result = Object.keys(grouped).map(key => ({year: key, count: grouped[key]}));

        const newResult = addMissingYearStat(yearArray, result)
        
        setCondensedHistory(newResult);
        
    }, [history])
    
      return (
        <div className="mt-4">

          <h1 className="text-3xl mt-3 font-bold mb-3 text-white text-center">{value} by Year</h1>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={condensedHistory}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
              </defs>
    
              <XAxis dataKey="year" interval={4} dx={50}/>
              <YAxis type="number" domain={[0, 60]}/>
              <Tooltip
                contentStyle={{
                backgroundColor: "transparent",
                border: "none"
              }}
                labelStyle={{
                color: "#FFFFFF"
              }}/>
              <Area type="natural" dataKey="count" strokeWidth={2} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
            </AreaChart>
          </ResponsiveContainer>
          <p>{value} albums account for {Math.floor((history.length/7700)*100)}% of all chart entries on this chart</p>
          <p>Out of 5778 unique albums, {value} albums number {number}</p>
        </div>
    
      );
}

export default GenreOverTime;