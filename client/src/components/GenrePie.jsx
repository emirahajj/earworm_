import "../App.css"
import {useEffect, useState} from 'react'
import { fetchAlbum } from "../api";
import { Link } from "react-router-dom";
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

var colors = [
    "#F95470",
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

const GenrePie = (props) => {
    //const [albumIDArray, setAlbumIDArray] = useState(props)
    const [albumFullArray, setAlbumFullArray] = useState([props.albums])
    const [stat, setStat] = useState([])
    //let array = props.albums;

    useEffect(() => {
        setAlbumFullArray(props.albums)
        //let myStatObj = createStat();
        //console.log(myStatObj)

    }, [props])

    useEffect(() => {
        const grouped = albumFullArray.reduce((groups, cur)=> {
            const key = cur.genre;
            groups[key] = (groups[key] || 0) + 1;
            return groups;
        }, {});

        const result = Object.keys(grouped).map(key => ({genre: key, count: grouped[key]}));
        result.sort((a, b) => b.count - a.count);
        setStat(result);
        
    }, [albumFullArray])

    return (
        <div>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stat}
                dataKey="count"
                nameKey="genre"
                cx="50%"
                cy="50%"
                labelLine={false}
                label
                outerRadius={100}>
                {stat.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    cornerRadius={2}
                    stroke="#202743"
                    strokeWidth={0.5}
                    fill={colors[index]}></Cell>
                ))}
              </Pie>
              <Legend
                wrapperStyle={{
                color: "#FFFFFF",
                fontSize: "13px",
                marginRight: "5px"
              }}
                layout="vertical"
                verticalAlign="middle"
                iconType="circle"
                align="right"></Legend>
            </PieChart>
          </ResponsiveContainer>
        </div>
    )
}

export default GenrePie;