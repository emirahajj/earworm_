import AlbumSnapshot from "../components/AlbumSnapshot"
import { useState, useEffect, useCallback} from 'react'
import { fetchAlbum, fetchAudiodbAlbum, fetchToken, fetchSpotifyAlbum, fetchAlbumTracks } from '../api/index'
import SpotifyWebApi from 'spotify-web-api-js'
import { Redirect } from "react-router";
import ChartPosRecap from '../components/ChartPosRecap'
import Navbar from '../components/Navbar';
import SimpleBarReact from "simplebar-react"
import "simplebar/src/simplebar.css"

const IndividualAlbum = ({albumID, onChangeAlbumId}) => {


    const [artistName, setArtistName] = useState(" ");
    const [albumName, setAlbumName] = useState(" ");
    const [genre, setGenre] = useState(" ");
    const [date, setDate] = useState(0);
    const [image, setImage] = useState(" ");
    const [awards, setAwards] = useState([]);
    const [chartPos, setChartPos] = useState([]);
    const [desc, setDesc] = useState(" ")
    const [spotifyTracks, setSpotifyTracks] = useState([])

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
            <div>
                <Navbar />
                <div className="flex flex-col lg:flex-row mt-10 w-full text-justify justify-around px-6">
                    <AlbumSnapshot image={image} albumName={albumName} date={date} artistName={artistName} genre={genre} description={desc} awards={awards} />
                    <div className= "flex flex-col w-full lg:max-w-md justify-center">
                    {spotifyTracks.length !== 0 ?

                        
                        <div>
                        {console.log(spotifyTracks)}
                            <h1 className=" text-3xl font-bold text-center py-3">Tracklist</h1>
                            <SimpleBarReact style={{ maxHeight: 500 }}>
                                <div className= "bg-dark-1 rounded-2xl bg-opacity-90 px-6 py-4">
                                {spotifyTracks.map((track, index) => {
                                    return (
                                        <>
                                            <p className="leading-7 text-gray-100 font-light">{index + 1}. {track.name}</p>
                                            {index === spotifyTracks.length -1 ? <></> : <hr className=" border-gray-500 px-5"/> }
                            
                                        </>
                                        )
                                })}
                                </div>
                            </SimpleBarReact>
                            <div className= "w-full py-8 flex justify-center"><button className=" bg-dark-1 hover:bg-green-800 rounded-full w-48 py-2 px-2 font-bold" onClick={handleChange}>Listen to this album</button></div>
                        </div> : <div> </div>}


                        <ChartPosRecap positions={chartPos}/>
                    </div>
                </div>
            </div>
    );
}

export default IndividualAlbum;

