import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import tester from './tester.js';

const app = express();

//setting up body parser so we can send requests
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//the conncetion URL we got from Cloud Atlas. 
//will store them in environment variable when we deploy
//**need to replace <password> with the password */
const CONNECTION_URL = 'mongodb+srv://emira499:<password>.9fd8x.mongodb.net/billboard?retryWrites=true&w=majority'
//we're going to use mongodb atlas
const PORT = process.env.port || 5000;

const connectionparams = {
    useNewUrlParser: true, useUnifiedTopology: true
}

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
    albums: [albumSchema]
});

artistSchema.index({name: 1}, {unique: true})
const Artist = mongoose.model("artist", artistSchema)

const chartSchema = new mongoose.Schema({
    2020: [{
        rank: Number,
        album: albumSchema
    }],
  2019: [{
        rank: Number,
        album: albumSchema
    }],
  2018: [{
        rank: Number,
        album: albumSchema
    }],
  2017: [{
        rank: Number,
        album: albumSchema
    }],
  2016: [{
        rank: Number,
        album: albumSchema
    }],
  2015: [{
        rank: Number,
        album: albumSchema
    }],
  2014: [{
        rank: Number,
        album: albumSchema
    }],
  2013: [{
        rank: Number,
        album: albumSchema
    }],
  2012: [{
        rank: Number,
        album: albumSchema
    }],
  2011: [{
        rank: Number,
        album: albumSchema
    }],
  2010: [{
        rank: Number,
        album: albumSchema
    }],
  2009: [{
        rank: Number,
        album: albumSchema
    }],
  2008: [{
        rank: Number,
        album: albumSchema
    }],
  2007: [{
        rank: Number,
        album: albumSchema
    }],
  2006: [{
        rank: Number,
        album: albumSchema
    }],
  2005: [{
        rank: Number,
        album: albumSchema
    }],
  2004: [{
        rank: Number,
        album: albumSchema
    }],
  2003: [{
        rank: Number,
        album: albumSchema
    }],
  2002: [{
        rank: Number,
        album: albumSchema
    }],
  2001: [{
        rank: Number,
        album: albumSchema
    }],
  2000: [{
        rank: Number,
        album: albumSchema
    }],
  1999: [{
        rank: Number,
        album: albumSchema
    }],
  1998: [{
        rank: Number,
        album: albumSchema
    }],
  1997: [{
        rank: Number,
        album: albumSchema
    }],
  1996: [{
        rank: Number,
        album: albumSchema
    }],
  1995: [{
        rank: Number,
        album: albumSchema
    }],
  1994: [{
        rank: Number,
        album: albumSchema
    }],
  1993: [{
        rank: Number,
        album: albumSchema
    }],
  1992: [{
        rank: Number,
        album: albumSchema
    }],
  1991: [{
        rank: Number,
        album: albumSchema
    }],
  1990: [{
        rank: Number,
        album: albumSchema
    }],
  1989: [{
        rank: Number,
        album: albumSchema
    }],
  1988: [{
        rank: Number,
        album: albumSchema
    }],
  1987: [{
        rank: Number,
        album: albumSchema
    }],
  1986: [{
        rank: Number,
        album: albumSchema
    }],
  1985: [{
        rank: Number,
        album: albumSchema
    }],
  1984: [{
        rank: Number,
        album: albumSchema
    }],
  1983: [{
        rank: Number,
        album: albumSchema
    }],
  1982: [{
        rank: Number,
        album: albumSchema
    }],
  1981: [{
        rank: Number,
        album: albumSchema
    }],
  1980: [{
        rank: Number,
        album: albumSchema
    }],
  1979: [{
        rank: Number,
        album: albumSchema
    }],
  1978: [{
        rank: Number,
        album: albumSchema
    }],
  1977: [{
        rank: Number,
        album: albumSchema
    }],
  1976: [{
        rank: Number,
        album: albumSchema
    }],
  1975: [{
        rank: Number,
        album: albumSchema
    }],
  1974: [{
        rank: Number,
        album: albumSchema
    }],
  1973: [{
        rank: Number,
        album: albumSchema
    }],
  1972: [{
        rank: Number,
        album: albumSchema
    }],
  1971: [{
        rank: Number,
        album: albumSchema
    }],
  1970: [{
        rank: Number,
        album: albumSchema
    }]
});
const Chart = mongoose.model("charts", chartSchema);


tester.forEach(element => {
    //first make the album object
    //let id = new mongoose.Types.ObjectId();
    let a = element.duration.split(":");
    var number = a.length > 2 ? parseInt(a[0])*60*60 + parseInt(a[1])*60 + parseInt(a[2]) : (parseInt(a[0])*60+ parseInt(a[1]));
    let b = parseInt(element.release_year);
    let newChartPos = {year: element.chart_year, rank: element.rank};

    var album = new Album({
        //_id: id,
        title: element.title,
        artist: element.artist,
        img: element.image,
        genre: element.genre,
        duration: number,
        release: b,
        styles: element.subgenres,
        chart_positions: {
            year: element.chart_year,
            rank: element.rank
        },
        awards: [element.awards]
    });

    //if this album exists, album will equal this incoming object, otherwise, album = what was found form the query
    //Album.findOne({title: element.title, artist: element.artist}, function(err, docs) {
    const artist = new Artist({
        name: element.artist,
        genres: [element.genre], 
        albums: [album]
    });


     Album.updateOne({title: element.title, artist: element.artist}, {$push: {chart_positions: newChartPos}, img: element.image, duration: number}, {upsert: true}, function(err, result){
        //  if (!err){
        //     album = result;
        //      if (!result){
                
        //      }
        //  }
     });
});

var testarray = [];
var query = Album.find();
query.exec((err, albums) => {
    albums.forEach((entry) =>{
        let album = entry.toObject();
        let artist = album.artist;
        let genre = album.genre;
        Artist.updateOne({name: artist}, {$push: {genres: genre, albums: album}}, {upsert: true}, function(err, restul){

        })
    })
});


//console.log(testarray)