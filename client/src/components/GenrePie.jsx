import "../App.css"
import {useEffect, useState} from 'react'
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

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
    "#E7EC66"
  ];

const GenrePie = ({chartyear, type, genreId}) => {
    const [albumFullArray, setAlbumFullArray] = useState(chartyear)
    const [stat, setStat] = useState([])
    const [percentage, setPercentage] = useState({
      [genreId] : 1,
      other: 99
  });


    useEffect(() => {
      setAlbumFullArray(chartyear);

    }, [chartyear])

    useEffect(() => {
        const grouped = (type === "yearly" ? albumFullArray.filter((element)=> element.rank < 101): albumFullArray).reduce((groups, curr)=> {
            const key = (type === "yearly" ? curr.album.genre: curr.genre);
            //console.log(key)
            groups[key] = (groups[key] || 0) + 1;
            return groups;
        }, {});

        let result = Object.keys(grouped).map(key => ({genre: key, count: grouped[key]}));
        result.sort((a, b) => b.count - a.count);
        
        if (type === "allTime"){
          // result[1]={genre: "Other", count: 5778-result[0].count}
          result = result.slice(0,10);
        }
        setStat(result);
        
    }, [albumFullArray, type])

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
                label={{dy:5, offsetRadius: type==="allTime" ? 30: 25} }                
                labelLine = {{strokeWidth: 2 }}
                outerRadius={85}>
                {stat.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    cornerRadius={3}
                    stroke="#202743"
                    strokeWidth={0.75}
                    fill={colors[(type==="yearly" ? index: colors.length-index -1)]}></Cell>
                ))}
              </Pie>
              <Legend
                wrapperStyle={{
                color: "#FFFFFF",
                fontSize: "13px",
                marginRight: "0px"
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