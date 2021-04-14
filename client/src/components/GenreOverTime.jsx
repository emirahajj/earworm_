import "../App.css"
import {useEffect, useState} from 'react'
import { fetsGenreHistory, fetchAllAlbumsInGenre } from "../api";
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area, BarChart} from 'recharts'
import BarGenreChart from "./BarGenreChart";


const GenreOverTime = (props) => {
    const [genreName, setGenreName] = useState(props.genre);

    //shows how many albums of a genre appeared over the years
    const [history, setHistory] = useState(
      [
        {
          "_id": 2020,
          "count": 0
        },
        {
          "_id": 2019,
          "count": 0
        },
        {
          "_id": 2018,
          "count": 0
        },
        {
          "_id": 2017,
          "count": 0
        },
        {
          "_id": 2016,
          "count": 0
        },
        {
          "_id": 2015,
          "count": 0
        },
        {
          "_id": 2014,
          "count": 0
        },
        {
          "_id": 2013,
          "count": 0
        },
        {
          "_id": 2012,
          "count": 0
        },
        {
          "_id": 2011,
          "count": 0
        },
        {
          "_id": 2010,
          "count": 0
        },
        {
          "_id": 2009,
          "count": 0
        },
        {
          "_id": 2008,
          "count": 0
        },
        {
          "_id": 2007,
          "count": 0
        },
        {
          "_id": 2006,
          "count": 0
        },
        {
          "_id": 2005,
          "count": 0
        },
        {
          "_id": 2004,
          "count": 0
        },
        {
          "_id": 2003,
          "count": 0
        },
        {
          "_id": 2002,
          "count": 0
        },
        {
          "_id": 2001,
          "count": 0
        },
        {
          "_id": 2000,
          "count": 0
        },
        {
          "_id": 1999,
          "count": 0
        },
        {
          "_id": 1998,
          "count": 0
        },
        {
          "_id": 1997,
          "count": 0
        },
        {
          "_id": 1996,
          "count": 0
        },
        {
          "_id": 1995,
          "count": 0
        },
        {
          "_id": 1994,
          "count": 0
        },
        {
          "_id": 1993,
          "count": 0
        },
        {
          "_id": 1992,
          "count": 0
        },
        {
          "_id": 1991,
          "count": 0
        },
        {
          "_id": 1990,
          "count": 0
        },
        {
          "_id": 1989,
          "count": 0
        },
        {
          "_id": 1988,
          "count": 0
        },
        {
          "_id": 1987,
          "count": 0
        },
        {
          "_id": 1986,
          "count": 0
        },
        {
          "_id": 1985,
          "count": 0
        },
        {
          "_id": 1984,
          "count": 0
        },
        {
          "_id": 1983,
          "count": 0
        },
        {
          "_id": 1982,
          "count": 0
        },
        {
          "_id": 1981,
          "count": 0
        },
        {
          "_id": 1980,
          "count": 0
        },
        {
          "_id": 1979,
          "count": 0
        },
        {
          "_id": 1978,
          "count": 0
        },
        {
          "_id": 1977,
          "count": 0
        },
        {
          "_id": 1976,
          "count": 0
        },
        {
          "_id": 1975,
          "count": 0
        },
        {
          "_id": 1974,
          "count": 0
        },
        {
          "_id": 1973,
          "count": 0
        },
        {
          "_id": 1972,
          "count": 0
        },
        {
          "_id": 1971,
          "count": 0
        },
        {
          "_id": 1970,
          "count": 0
        }
      ]);

    const makeArray = () =>{
      return Array.from({length : 51}, (_, i)=> i + 1970);
    }


    useEffect(() => {
      let yearArray = makeArray();
      //function to add missing "dummy" data values since incoming data misses years
      //when there are no albums of a certain genre 
      const addMissingYearStat = (array, input) => {
        const get = (year) => { return find(year) || make(year)}
        const find = (year) => { return input.find((x)=> {return parseInt(x._id) === year})};
        const make = (year) => { return {_id: year.toString(), count: 0}}
        return array.map(get);
      }

      fetsGenreHistory(genreName).then((res)=>{
        setHistory(addMissingYearStat(yearArray,res.data));
      })
      }, [genreName])
    
      return (
        <div className="my-12">

          <h1 className="text-4xl mt-3 font-bold mb-3 text-white text-center">{genreName} Albums by Year</h1>
          <ResponsiveContainer width="100%" height={450}>
            <AreaChart
              data={history}
              margin={{ top: 15, right: 30, left: 20, bottom: 30 }}

              >
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#323232" stopOpacity={1}/>
                </linearGradient>
              </defs>
    
              <XAxis label={{value: 'Years', dy: 35, fill: '#82ca9d' } }  angle="0" dataKey="_id" interval="preserveEnd" dx={0} dy={5} tickCount={10} tick={{ fill: 'gray' }}/>
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
              <Area type="monotoneX" isAnimationActive={true} animationDuration={1000} animationEasing='ease-out' dataKey="count" strokeWidth={2} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
    
      );
}

export default GenreOverTime;