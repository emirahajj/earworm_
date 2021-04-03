import "../App.css"
import {useEffect, useState} from 'react'
import { fetchAlbum } from "../api";
import { Link } from "react-router-dom";

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
        <p>This is the Genre Pie Chart component for {props.year}</p>
        {stat.map(genreObj => {
            return <p>{genreObj.genre} : {genreObj.count}</p>
        })}
        </div>
    )
}

export default GenrePie;