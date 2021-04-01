import "../App.css"
import {useEffect, useState} from 'react'
import { fetchAlbum } from "../api";

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
            <img className= "w-32 rounded-lg" src={AlbumImage} alt=""/>
            <p>{AlbumTitle}</p>
        </div>
    )
}

export default AlbumModal;