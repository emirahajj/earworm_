import express from 'express';
import Genres from '../models/Genres.js';

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

export default router;