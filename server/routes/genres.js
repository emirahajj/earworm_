import express from 'express';
import Genres from '../models/Genres.js';
import Chart from '../models/Charts.js';
import mongoose from 'mongoose';
import Album from '../models/Albums.js';

const router = express.Router();

router.get("/", async (req,res)=> {
    try {
        const data =  await Genres.find();
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});


router.get("/:genre", async (req,res)=> {
    try {
        const data =  await Genres.find({name: req.params.genre});
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

/*
returns an array like : [
    {"year": 2020, "genre": Pop} <- repeated as many times as there are albums of that genre
    ...
    {"year": 1970, "genre": Pop}
]
*/
router.get("/all/:genre", async (req,res)=> {
    try {
        const data =  await Chart.find().sort({year: -1, rank: 1}).populate({path: 'album'});
        let newdata = data.map(element => {
            let genre = element["album"]["genre"]
            let newObj = {
                year: element.year,
                genre: genre
            }
            return (genre === req.params.genre) ? newObj : false;
        })
         let newresults = newdata.filter(Boolean);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(newresults);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

export default router;