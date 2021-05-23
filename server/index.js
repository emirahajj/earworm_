import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import albumRoutes from './routes/albums.js'
import artistRoutes from './routes/artists.js'
import genreRoutes from './routes/genres.js'
import chartRoutes from './routes/chartYear.js'
import spotifyRoutes from './routes/spotify.js'
import audiodbRoutes from './routes/audiodb.js'
import dotenv from 'dotenv'
import SpotifyWebApi from 'spotify-web-api-node'
import axios from 'axios'
import Album from './models/Albums.js'
import Artist from './models/Artists.js'
import Chart from './models/Charts.js'
import Genre from './models/Genres.js'

const app = express();
dotenv.config();



app.use('/artists', artistRoutes);
app.use('/albums', albumRoutes);
app.use('/charts', chartRoutes);
app.use('/genres', genreRoutes);
app.use('/audiodb', audiodbRoutes);
app.use('/spotify', spotifyRoutes);


//setting up body parser so we can send requests
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//we're going to use mongodb atlas
const PORT = process.env.port || 5000;
const connectionparams = {useNewUrlParser: true, useUnifiedTopology: true}

const connection = mongoose.connect(process.env.CONNECTION_URL, connectionparams)
.then(() => {
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
})
.catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);

var clientId = process.env.SPOTIFY_CLIENT_ID,
  clientSecret = process.env.SPOTIFY_CLIENT_SECRET;


var sAPI = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});
// Create the api object with the credentials
// Retrieve an access token.


app.use("/token", (req,res)=> {
    sAPI.clientCredentialsGrant().then(
        function(data) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.status(200).json(data);
      
          // Save the access token so that it's used in future calls
          sAPI.setAccessToken(data.body['access_token']);
        },
        function(err) {
            res.status(404).json({message: err.message});
        }
      );
});


// let alby = [];
// let albums = async () => {
//     let result = await Album.find();
//     return result
// }
// // x is the array 
// albums().then(x => {
//     x.forEach(async element =>{
//         let genreName = element.genre;
//         let stylesArray = element.styles;
//         let criteria = {
//             $addToSet: {styles: {$each : stylesArray}}
//         }
//         await Genre.findOneAndUpdate({name: genreName}, criteria, {upsert: true, new: true});
//     })
// })

//this code retrieves all the artist objects from the DB and updates their
//images using the spotify API. setTimeOut is used to ensure that we don't get 
//rate limited from Spotify. Should be run once or twice a year along with the code
//that puts new entries into the chart

// sAPI.clientCredentialsGrant().then(
//   function(data) {
//     // Save the access token so that it's used in future calls
//     sAPI.setAccessToken(data.body['access_token']);
//     console.log("token set: " + data.body['access_token']);
//   },
//   function(err) {
//       console.log("error")
//   })

// let artists = async () => {
//   let result = await Artist.find();
//   return result
// }
// artists().then(x => {
//   x.forEach(async (element, index) =>{
//     //element.updateOne()
//     setTimeout(()=> {
//       sAPI.searchArtists(element.name).then((data) => {
//         Artist.findOneAndUpdate({name: element.name}, {$set: {image: data.body.artists.items[0].images[0].url}}, (err, doc)=>{
//           if (err) {
//             console.log(err)
//           }
//           //console.log(data.body.artists.items[0].images[0].url)
//           //console.log(doc);
//         })
//         console.log(element.name)
//         console.log(data.body.artists.items[0].images[0].url)
//         }).catch((err) => {
//         console.log(err);
//     })
//     }, 1500 * index)
//     //)
//   })
// })


// //loop through the whole scraped array to populate our DB
// entries.forEach(async element => {
//     //create a new Mongoose ObjectID
//     let id = new mongoose.Types.ObjectId();
//     //format the String values to respective Number values
//     let a = element.duration.split(":");
//     var number = a.length > 2 ? parseInt(a[0])*60*60 + parseInt(a[1])*60 + parseInt(a[2]) : (parseInt(a[0])*60+ parseInt(a[1]));
//     let b = parseInt(element.release_year);
//     //create chart postiton object to append to chart_position array in Album record
//     let newChartPos = {year: element.chart_year, rank: element.rank};
//     //fields to update to Album object
//     let albumUpdate = {
//       img: element.image,
//       genre: element.genre,
//       duration: number,
//       release: b,
//       styles: element.subgenres,
//       awards: element.awards,
//       $addToSet: {chart_positions: newChartPos}
//     }
//     //search for album using artist and title
//     //if doesn't exist, create a new Album object + Chart record and save to DB, 
//     //if it does, just push the incoming newChartPos object into array.
//     await Album.findOneAndUpdate({title: element.title, artist: element.artist}, albumUpdate, {upsert: true, new: true}, (err, doc, res)=>{
//       //resetting id variable to pass into the Artist update function to append to album array
//       //in Artist object
//       id = doc._id; 
//       const chartEntry = new Chart({
//         year: element.chart_year,
//         rank: element.rank,
//         album: doc._id
//       })
//        chartEntry.save();
//     });
//     //search for artist by name, if the record exists, add the incoming album object to array,
//     //if it doesn't create + save one.
//     let artistUpdate = {$addToSet: {genres: element.genre, albums: id}};
//      await Artist.updateOne({name: element.artist}, artistUpdate, {upsert: true, new: true});
// });
