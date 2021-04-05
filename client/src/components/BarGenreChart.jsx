import "../App.css"
import {useEffect, useState} from 'react'
import { fetchAlbum, fetchChart, fetchChartYear } from "../api";
import { Link } from "react-router-dom";
import {ResponsiveContainer, XAxis, YAxis, LabelList, Cell, Bar, BarChart} from 'recharts'

var colors = [
    "#F97470",
    "#E7B966",
    "#C890EA",
    "#F88C6C",
    "#81A8FF",
    "#C2E98D",
    "#8086A0",
    "#3A7F5F",
    "#87DCFF",
    "#3377C6",
    "#BD3BBC",
    "#F19D38",
    "#74B5AA",
    "#5BB481"
  ];

const BarGenreChart = (props) => {
    const [wholeChart, setWholeChart] = useState([])
    const [stat, setStat] = useState([])


    //make two different API calls depending on the value of
    //props.type: yearly = fetchChartYear allTime = fetchChart

    useEffect(() => {
        fetchChart().then((res)=>{
            setWholeChart(res.data);
            console.log(res.data)
        })

    }, [])

    useEffect(() => {
        const grouped = wholeChart.reduce((groups, cur)=> {
            const key = cur.album.genre;
            groups[key] = (groups[key] || 0) + 1;
            return groups;
        }, {});

        const result = Object.keys(grouped).map(key => ({genre: key, count: grouped[key]}));
        result.sort((a, b) => b.count - a.count);
        console.log(result)
        setStat(result);
        
    }, [wholeChart])

    return (
        <div>
        <h1>Chart position breakdown:</h1>
                  <ResponsiveContainer width="100%" height={800}>
            <BarChart
              data={stat}
              layout="vertical"
              margin={{
              top: 5,
              right: 30,
              left: 60
            }}>
              <defs>
                <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="5%" stopColor="#92C8A0" stopOpacity={1}/>
                  <stop offset="85%" stopColor="#131313" stopOpacity={0.35}/>
                </linearGradient>
              </defs>
              <XAxis hide={true} type="number" domain={[0, 'dataMax']}/>
              <YAxis hide={true} type="category" dataKey="genre"/>
              <Bar barSize={60} dataKey="count" radius={8}>
                <LabelList dataKey="genre" position="right" fill="#FFFFFF"/>
                <LabelList dataKey="count" position="left" fill="#FFFFFF"/> {stat.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    cornerRadius={2}
                    //stroke="#FFFFFF"
                    fill="url(#colorUv)"></Cell>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
    )
}

export default BarGenreChart;