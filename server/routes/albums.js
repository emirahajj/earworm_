import express from 'express';
import mongoose from 'mongoose';
import Album from '../models/Albums.js'


const router = express.Router();

router.get("/", async (req,res)=> {
    const json =  await Album.find().limit(10)
    .then((data) => {
        res.json(data)
    })
    .catch((error)=> {
        console.log('Error: ', error)
    });
    ;
});

export default router;