import AlbumSnapshot from "../components/AlbumSnapshot"
import { useState, useEffect, useCallback} from 'react'
import { fetchAlbum, fetchAudiodbAlbum, fetchToken } from '../api/index'
import SpotifyWebApi from 'spotify-web-api-js'
import { Redirect } from "react-router";
import ChartPosRecap from '../components/ChartPosRecap'

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
        fetchToken().then((res) => {
            let spotify = new SpotifyWebApi();
            spotify.setAccessToken(res.data.body["access_token"]);
            console.log(res.data.body["access_token"])
            spotify.searchAlbums(`${albumName}, ${artistName}`).then((data) => {
                console.log(data);
                //removing + re-adding iframe from the DOM to avoid
                //replacing the current picked spotify URI with
                //the previous one
                const iframe = document.getElementById('iframe');
                const iFrameParent = iframe.parentElement;
                iframe.remove();
                iFrameParent.append(iframe)

                onChangeAlbumId('https://open.spotify.com/embed/album/' + data.albums.items[0].id);
            }).catch((err) => {
                console.log(err);
            })
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

            fetchToken().then((res) => {
                let spotify = new SpotifyWebApi();
                spotify.setAccessToken(res.data.body["access_token"]);
                console.log(res.data.body["access_token"])
                spotify.searchAlbums(`${object.title}, ${object.artist}`).then((data) => {
                    console.log(data);
                    let spotifyAlbumID = data.albums.items[0].id
                    spotify.getAlbumTracks(spotifyAlbumID).then((data)=>{
                        console.log(data)
                        setSpotifyTracks(data["items"]);
                    })
                }).catch((err) => {
                    console.log(err);
                })
            })

        }).catch((err) => {
            setAlbumName("No album found");
        })


    }, [albumID]);


    return (
        (albumName === "No album found") ? <Redirect to="/home" /> :
            <div>
                <div className="flex flex-col md:flex-row mt-10 w-full text-justify justify-around px-6">
                    <AlbumSnapshot image={image} albumName={albumName} date={date} artistName={artistName} genre={genre} description={desc} awards={awards} />
                    <div className= "flex flex-col w-full md:max-w-md justify-center">
                        <h1 className=" text-3xl font-bold text-center py-3">Tracklist</h1>
                        <div className= "bg-gray-1 rounded-2xl bg-opacity-90 px-6 py-4 justify-center">
                        {spotifyTracks.map((track) => {
                            return (
                                <>
                                    <p className=" leading-7">{track.name}</p>
                                    <hr className=" border-gray-500 px-5"/>
                                </>
                                )
                        })}
                        </div>
                        <div><button className="bg-primary rounded-full w-48" onClick={handleChange}>Listen to this album</button></div>

                        <ChartPosRecap positions={chartPos}/>
                    </div>
                </div>
            </div>
    );
}

export default IndividualAlbum;

