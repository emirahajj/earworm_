import axios from 'axios'
import express from 'express';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

router.use("/album/:artistName/:albumName", (req, res)=> {
    const options={
        method: "GET",
        url: 'https://theaudiodb.p.rapidapi.com/searchalbum.php',
        params: {s: req.params.artistName, a: req.params.albumName},
        headers: {
            "x-rapidapi-key": process.env.AUDIODB_API_KEY,
            "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
        }
    };
    axios.request(options).then((response) =>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(response.data);
    }).catch(function (error) {
        res.status(404).json({message: error.message});
    });
})

router.use("/:artistName", (req, res)=> {
    const options={
        method: "GET",
        url: 'https://theaudiodb.p.rapidapi.com/search.php',
        params: {s: req.params.artistName},
        headers: {
            "x-rapidapi-key": process.env.AUDIODB_API_KEY, //PASSWORD HERE!
            "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
        }
    };
    axios.request(options).then((response) =>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(response.data);
    }).catch(function (err) {
        res.status(404).json({message: err.message});
    });
  })
//aritst before album



export default router;
  