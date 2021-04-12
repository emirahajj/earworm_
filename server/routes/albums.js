import express from 'express';
import mongoose from 'mongoose';
import Album from '../models/Albums.js'


const router = express.Router();

router.get("/", async (req,res)=> {
    try {
        const data =  await Album.find().limit();
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

router.get("/:id", async (req,res)=> {
    try {
        let id = new mongoose.Types.ObjectId(req.params.id)
        const data =  await Album.find({_id: id});
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

router.get("/all/:genre", async (req,res)=> {
    try {
        //const data =  await Album.find({genre: req.params.genre});
        const data =  await Album.aggregate([
            {
              '$match': {
                'genre': req.params.genre
              }
            }, {
              '$count': req.params.genre
            }
          ]);
          data[1] = await Album.find({genre: req.params.genre});
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

export default router;