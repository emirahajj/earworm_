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
        const data =  await Genres.find({name: req.params.genre.replace('|', '/')});
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
        const data = await Chart.aggregate([
            {
              '$lookup': {
                'from': 'albums', 
                'localField': 'album', 
                'foreignField': '_id', 
                'as': 'album'
              }
            }, {
              '$unwind': {
                'path': '$album',
                'preserveNullAndEmptyArrays' : true
              }
            }, {
              '$match': {
                'album.genre': req.params.genre.replace('|', '/')
              }
            }, {
              '$group': {
                '_id': '$year', 
                'count': {
                  '$sum': 1
                }
              }
            }, {
              '$sort': {
                '_id': 1
              }
            }
          ]);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

export default router;