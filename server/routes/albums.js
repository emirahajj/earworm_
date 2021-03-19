import express from 'express';
import mongoose from 'mongoose';
import Album from '../models/Albums.js'


const router = express.Router();

router.get("/", async (req,res)=> {
    try {
        const data =  await Album.find().limit(20);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

export default router;