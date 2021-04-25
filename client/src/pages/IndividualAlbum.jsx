import React from "react";
import Navbar from "../components/Navbar"
import AlbumSnapshot from "../components/AlbumSnapshot"
import { useState, useEffect } from 'react'
import { fetchAlbum, fetchAudiodbAlbum, fetchToken } from '../api/index'
import SpotifyWebApi from 'spotify-web-api-js'
import { Redirect } from "react-router";





const IndividualAlbum = ({albumID, onChangeAlbumId}) => {

    const [artistName, setArtistName] = useState(" ");
    const [albumName, setAlbumName] = useState(" ");
    const [genre, setGenre] = useState(" ");
    const [date, setDate] = useState(0);
    const [image, setImage] = useState(" ");
    const [spotifyID, setSpotifyID] = useState("");
    const [awards, setAwards] = useState([]);
    const [chartPos, setChartPos] = useState([]);
    const [desc, setDesc] = useState(" ")

    // const handleChange = useCallback(
    //     () => {
    //         callback
    //     },
    //     [input],
    // )

    const handleChange = () => {
        console.log(spotifyID)
        onChangeAlbumId(spotifyID)
    }

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
                    //
                    setSpotifyID('https://open.spotify.com/embed/album/' + data.albums.items[0].id);
                }).catch((err) => {
                    console.log(err);
                })
            })

        }).catch((err) => {
            setAlbumName("No album found");
        })

    }, [albumID]);


    return (
        // (albumName === "No album found") ? <Redirect to="/home" /> :
            <div>
                <Navbar />
                <div className="flex flex-col mt-10 w-full text-justify justify-center px-6">
                    <AlbumSnapshot positions={chartPos} image={image} albumName={albumName} date={date} artistName={artistName} genre={genre} description={desc} awards={awards} />
                    <button onClick={handleChange}>This is a button</button>

                </div>

            </div>
    );
}

export default IndividualAlbum;

