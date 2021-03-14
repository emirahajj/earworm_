import express from 'express';

const router = express.Router();

router.get("/",  (req,res)=> {
    res.send("Albums home page goes here");
});

export default router;