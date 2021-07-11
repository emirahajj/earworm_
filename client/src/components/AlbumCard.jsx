import AlbumSnapshot from "../components/AlbumSnapshot"
import { useState, useEffect, useCallback} from 'react'
import { fetchAlbum, fetchAudiodbAlbum, fetchSpotifyAlbum, fetchAlbumTracks } from '../api/index'
import { Redirect } from "react-router";
import ChartPosRecap from '../components/ChartPosRecap'
import Navbar from '../components/Navbar';
import SimpleBarReact from "simplebar-react"
import "simplebar/src/simplebar.css"
import sample from '../img/album-cover.jpg'
import spot from '../img/spotifylogo.png'
import Collapse from "@material-ui/core/Collapse"
import GrammyComponent from './GrammyComponent'
import Tooltip from '@material-ui/core/Tooltip'
import GrammyRecap from "./GrammyRecap";


const AlbumCard = ({albumID, onChangeAlbumId}) => {


    const [artistName, setArtistName] = useState(" ");
    const [albumName, setAlbumName] = useState(" ");
    const [genre, setGenre] = useState(" ");
    const [date, setDate] = useState(0);
    const [image, setImage] = useState(" ");
    const [awards, setAwards] = useState([]);
    const [chartPos, setChartPos] = useState([]);
    const [desc, setDesc] = useState(" ")
    const [spotifyTracks, setSpotifyTracks] = useState([])
    const [open, setOpen] = useState(false);

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const handleChange = useCallback(() => {
        fetchSpotifyAlbum(albumName, artistName).then((res) => {

            const iframe = document.getElementById('iframe');
            const iFrameParent = iframe.parentElement;
            iframe.remove();
            iFrameParent.append(iframe)
            console.log(res)
            try{
                onChangeAlbumId('https://open.spotify.com/embed/album/' + res.data[0].id)
            } catch(err) {
                console.log(err);
            }
        })
    },[albumName, artistName, onChangeAlbumId])

    useEffect(() => {
        fetchAlbum(albumID).then((res) => {
            let object = res.data[0];
            setArtistName(object.artist);
            setAlbumName(object.title);
            setGenre(object.genre);
            setDate(object.release);
            setImage(object.img);
            setAwards(object.awards);
            setChartPos(object.chart_positions);

            fetchAudiodbAlbum(object.artist, object.title).then((res) => {
                //
                if (res.data['album'] !== null) {
                    setDesc(res.data['album'][0].strDescriptionEN);
                    console.log(res.data)
                }
                else{
                    setDesc(" ")
                }
            })

            fetchSpotifyAlbum(object.title, object.artist).then((res) => {
                //console.log(`${object.title}, ${object.artist}`);
                console.log(res)

                let title = res.data[0].name
                if (title.toLowerCase === object.title.toLowerCase)
                    console.log(title)
                        let spotifyAlbumID = res.data[0].id
                        fetchAlbumTracks(spotifyAlbumID).then((res)=> {
                            console.log(res.data)
                            setSpotifyTracks(res.data.body["items"]);
                        }).catch((err)=> {
                            console.log(err)
                        })
            }).catch((err) => {
                console.log(err);
            })

        }).catch((err) => {
            setAlbumName("No album found");
        })


    }, [albumID]);


    return (
        (albumName === "No album found") ? <Redirect to="/home" /> :
        <div className="flex p-12 gap-12 flex-row">
        <div className="max-w-xl overflow-scroll">
            <img src={image} alt="" className=" rounded-2xl mb-6"/>
            <div className="flex flex-row">
                <h1 className="text-4xl font-bold inline-block">{albumName}
                </h1>
            </div>

            <h2 className="text-2xl text-gray-300">{artistName}</h2>
            {
                    (desc && (desc !== " ") ?
                        <div>
                            <Collapse collapsedHeight={140} in={open}>
                                <p className="fade-in mt-4">{desc}</p>
                            </Collapse>
                            <button className="flex text-gray-400 mt-3 justify-start font-bold bg-dark rounded-full px-3 py-1 focus:outline-none mb-4" onClick={() => setOpen(!open)} variant="custom"
                                aria-controls="drop"
                                aria-expanded={open}>
                                {open ? "Less" : "More"}
                            </button>
                        </div>
                        :
                        <p className="mt-10 text-gray-3 text-2xl text-center">No bio available</p>
                    )
                }
            <div className=" mt-12 flex flex-row justify-center place-items-center">
                <p className="inline">Preview on </p>
                <img src={spot} className="ml-2 w-24" alt="" onClick={handleChange} />
            </div>
        </div>
        <div className="w-96 flex flex-col gap-y-12">
            <div>
                <h1 className='text-3xl font-bold mb-2'>Tracklist</h1>
                {spotifyTracks.map((element, index) => {
                    return <p className="text-gray-300">{element.name}</p>
                })}
            </div>
            <div className="flex flex-col justify-center">
                <ChartPosRecap positions={chartPos}/>
                <GrammyRecap awards= {awards} artist={artistName}/>
            </div>
        </div>
    </div>
    );
}

export default AlbumCard;

