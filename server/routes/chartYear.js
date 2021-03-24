import express from 'express';
import Chart from '../models/Charts.js';

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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

export default router;