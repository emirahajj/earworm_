import express from 'express';
import Artist from '../models/Artists.js';

const router = express.Router();

router.get("/", async (req,res)=> {
    try {
        const data =  await Artist.find().limit(20);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

router.get("/:id", async (req,res)=> {
    try {
        const data =  await Artist.find({_id: request.params.id});
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

export default router;