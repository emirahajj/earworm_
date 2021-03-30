import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import albumRoutes from './routes/albums.js'
import artistRoutes from './routes/artists.js'
import genreRoutes from './routes/genres.js'
import chartRoutes from './routes/chartYear.js'
import dotenv from 'dotenv'


const app = express();
dotenv.config();

app.use('/artists', artistRoutes);
app.use('/albums', albumRoutes);
app.use('/charts', chartRoutes);
app.use('/genres', genreRoutes);

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
