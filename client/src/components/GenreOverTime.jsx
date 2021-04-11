import "../App.css"
import {useEffect, useState} from 'react'
import { fetsGenreHistory, fetchAllAlbumsInGenre } from "../api";
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area, BarChart} from 'recharts'
import BarGenreChart from "./BarGenreChart";


const GenreOverTime = (props) => {
    const [genreName, setGenreName] = useState(props.genre);

    //shows how many albums of a genre appeared over the years
    const [history, setHistory] = useState([]);
    
    //number of albms of that genre
    const [number, setNumber] = useState(0);

    //formatted data to feed to graph component:
    // [{year: "1970", count: 17}...etc]
    const [condensedHistory, setCondensedHistory] = useState([]);

    const makeArray = () =>{
      return Array.from({length : 51}, (_, i)=> i + 1970);
    }

    // useEffect(() => {
    //   //returns
    //   fetchAllAlbumsInGenre(genreName).then((res)=>{
    //     setNumber(res.data.length);
    //   })

    // }, [genreName])

    useEffect(() => {
      fetsGenreHistory(genreName).then((res)=>{
        setHistory(res.data);
      })
      }, [genreName])

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
        console.log(newResult);
        
        setCondensedHistory(newResult);
        
    }, [history])
    
      return (
        <div className="my-12">

          <h1 className="text-4xl mt-3 font-bold mb-3 text-white text-center">{genreName} Albums by Year</h1>
          <ResponsiveContainer width="100%" height={450}>
            <AreaChart
              data={condensedHistory}
              margin={{ top: 15, right: 30, left: 20, bottom: 30 }}

              >
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#323232" stopOpacity={1}/>
                </linearGradient>
              </defs>
    
              <XAxis label={{value: 'Years', dy: 35, fill: '#82ca9d' } }  angle="0" dataKey="year" interval="preserveEnd" dx={0} dy={5} tickCount={10} tick={{ fill: 'gray' }}/>
              <YAxis label={{value: 'Number of albums', angle: -90, position: 'center', dx: -30,  fill: '#82ca9d'}} type="number" domain={[0, 15]} tickCount={10} tick={{ fill: 'gray' }}/>
              <Tooltip
                contentStyle={{
                backgroundColor: "transparent",
                border: "none"
              }}
                labelStyle={{
                color: "#FFFFFF",
                width: "50px"
              }}/>
              <Area type="basis" animationDuration={2000} dataKey="count" strokeWidth={2} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
    
      );
}

export default GenreOverTime;