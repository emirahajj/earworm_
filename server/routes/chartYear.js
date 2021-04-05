import express from 'express';
import Chart from '../models/Charts.js';
import Albums from '../models/Albums.js';
import mongoose from 'mongoose'

const router = express.Router();

router.get("/", async (req,res)=> {
    try {
        const data =  await Chart.find({}).populate({path: "album"}).limit(600);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

router.get("/:year", async (req,res)=> {
    try {
        const data =  await Chart.find({year: req.params.year}).populate({path: "album"}).sort({rank: "ascending"});
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(404).json({message: error.message});
    }
});



//returns top <genre here> albums of that chart year.
router.get("/:year/:genre", async (req,res)=> {
    try {
        const data =  await Chart.find({year: req.params.year}).populate({path: "album"}).sort({rank: "ascending"});
        let result = data.filter((element)=> element.album.genre === req.params.genre);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});


export default router;