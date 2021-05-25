import express from 'express';
import SpotifyWebApi from 'spotify-web-api-node'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router();

var clientId = process.env.SPOTIFY_CLIENT_ID,
  clientSecret = process.env.SPOTIFY_CLIENT_SECRET;


var sAPI = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});
// Create the api object with the credentials
// Retrieve an access token.


router.get("/:query", (req,res)=> {
    sAPI.clientCredentialsGrant().then(
        function(data) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            //res.status(200).json(data);
            sAPI.setAccessToken(data.body['access_token']);

            sAPI.searchAlbums(req.params.query).then((response) => {
                console.log(response);
                //let spotifyAlbumID = response.body.albums.items[0].id
                res.status(200).json(response.body.albums.items)
                // sAPI.getAlbumTracks(spotifyAlbumID).then((data)=>{
                //     res.status(200).json(response.body.albums.items)

                //     console.log(data.body["items"])
                // //     setSpotifyTracks(data.body["items"]);
                // })
            }).catch((err) => {
                console.log(err);
            })
          // Save the access token so that it's used in future calls
        },
        function(err) {
            res.status(404).json({message: err.message});
        }
      );
});

router.get("/album/:id", (req,res)=> {
    sAPI.clientCredentialsGrant().then(
        function(data) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            //res.status(200).json(data);
            sAPI.setAccessToken(data.body['access_token']);

            sAPI.getAlbumTracks(req.params.id).then((response) => {
                console.log(response);
                //let spotifyAlbumID = response.body.albums.items[0].id
                res.status(200).json(response)

            }).catch((err) => {
                console.log(err);
            })
          // Save the access token so that it's used in future calls
        },
        function(err) {
            res.status(404).json({message: err.message});
        }
      );
});

export default router;