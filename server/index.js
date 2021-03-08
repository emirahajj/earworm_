import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

//setting up body parser so we can send requests
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//the conncetion URL we got from Cloud Atlas. 
//will store them in environment variable when we deploy
//**need to replace <password> with the password */
const CONNECTION_URL = 'mongodb+srv://emira499:byzylyk67@cluster0.9fd8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//we're going to use mongodb atlas
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`server running on port: ${PORT}`) ))
.catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);

