import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import entries from './final.js';

const app = express();

//setting up body parser so we can send requests
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//the conncetion URL we got from Cloud Atlas. 
//will store them in environment variable when we deploy
//**need to replace <password> with the password */
const CONNECTION_URL = 'mongodb+srv://emira499:<password>@cluster0.9fd8x.mongodb.net/billboard?retryWrites=true&w=majority'
//we're going to use mongodb atlas
const PORT = process.env.port || 5000;

const connectionparams = {useNewUrlParser: true, useUnifiedTopology: true}

const connection = mongoose.connect(CONNECTION_URL, connectionparams)
.then(() => {
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
})
.catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);

//const Chart = mongoose.model("album", albumSchema);

const albumSchema = new mongoose.Schema({
    title: String,
    artist: String,
    img: String,
    genre: String,
    duration: Number,
    release: Number,
    styles: {type: Array, "default": []},
    chart_positions: {type: Array, "default": []},
    awards: {type: Array, "default": []}
});

albumSchema.index({title: 1, artist: 1}, {unique: true});

const Album = mongoose.model("album", albumSchema);

const artistSchema = new mongoose.Schema({
    name: String,
    genres: {type: Array, "default": []},
    albums: [{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}]
});

artistSchema.index({name: 1}, {unique: true})
const Artist = mongoose.model("artist", artistSchema)

const chartSchema = new mongoose.Schema({
  year: Number,
  rank: Number,
  album: {type: mongoose.Schema.Types.ObjectId, ref: 'Album'}
});
const Chart = mongoose.model("charts", chartSchema);


entries.forEach(async element => {
    //first make the album object
    let id = new mongoose.Types.ObjectId();
    let a = element.duration.split(":");
    var number = a.length > 2 ? parseInt(a[0])*60*60 + parseInt(a[1])*60 + parseInt(a[2]) : (parseInt(a[0])*60+ parseInt(a[1]));
    let b = parseInt(element.release_year);
    let newChartPos = {year: element.chart_year, rank: element.rank};

    let albumUpdate = {
      img: element.image,
      genre: element.genre,
      duration: number,
      release: b,
      styles: element.subgenres,
      $addToSet: {chart_positions: newChartPos}
    }
    await Album.findOneAndUpdate({title: element.title, artist: element.artist}, albumUpdate, {upsert: true, new: true}, (err, doc, res)=>{
      id = doc._id; 
      const chartEntry = new Chart({
        year: element.chart_year,
        rank: element.rank,
        album: doc._id
      })
       chartEntry.save();
    });
    let artistUpdate = {$addToSet: {genres: element.genre, albums: id}};
     await Artist.updateOne({name: element.artist}, artistUpdate, {upsert: true, new: true});
});
