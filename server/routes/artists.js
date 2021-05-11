import express from 'express';
import Artist from '../models/Artists.js';
import mongoose from 'mongoose';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await Artist.find().limit(20);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.get("/:name", async (req, res) => {
    try {
        let formattedName = req.params.name.replace('%20', ' ')
        let formatted2 = formattedName.replace('|','/')
        const data = await Artist.find({ name: formatted2 });                //wait till names are formatted and store them in data.
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);                                             //If response is received then fetch it in json format. 
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.get("/artistLetter/:firstLetter", async (req, res) => {
    try {
        let char = req.params.firstLetter;
        const data = await Artist.find({ name: { $regex: '^' + char, $options: 'i' } });
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});



export default router;