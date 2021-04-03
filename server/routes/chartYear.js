import express from 'express';
import Chart from '../models/Charts.js';
import Albums from '../models/Albums.js';
import mongoose from 'mongoose'

const router = express.Router();

router.get("/", async (req,res)=> {
    try {
        const data =  await Chart.find();
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

router.get("/:year", async (req,res)=> {
    try {
        const data =  await Chart.find({year: req.params.year}).sort({rank: "ascending"});
        let newdata = data.map(async element => {
            let id = new mongoose.Types.ObjectId(element.album)
            let obj = await Albums.find({_id: id})
            return obj[0];
        })
        let results = await Promise.all(newdata);
        console.log(results);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(results);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

export default router;