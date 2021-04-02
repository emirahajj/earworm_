import "../App.css"
import {useEffect, useState} from 'react'
import { fetchAlbum } from "../api";
import { Link } from "react-router-dom";

const AlbumModal = (props) => {
    const [AlbumTitle, setAlbumTitle] = useState(" ")
    const [AlbumImage, setAlbumImage] = useState(" ")

    useEffect(()=> {
        fetchAlbum(props.id).then((res)=> {
            setAlbumTitle(res.data[0]["title"]);
            setAlbumImage(res.data[0]["img"]);
        })
    }, [])
    return (
        <div className="w-32">
            <img className= "h-32 rounded-lg" src={AlbumImage} alt=""/>
            <Link to={"/albums/" + props.id}>{AlbumTitle}</Link>
        </div>
    )
}

export default AlbumModal;