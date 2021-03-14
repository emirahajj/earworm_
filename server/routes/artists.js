import express from 'express';

const router = express.Router();

router.get("/",  (req,res)=> {
    res.send("Artists home page goes here");
});

export default router;