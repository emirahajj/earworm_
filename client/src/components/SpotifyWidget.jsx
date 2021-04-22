const SpotifyWidget = ({spotifyID, height}) => {
    return (
        <div className= "flex justify-center" >
        {spotifyID !== "" ? 
            //(<iframe className="rounded-xl" src={spotifyID} width="1000" height={height} frameBorder="0" allowtransparency="true" allow="encrypted-media" title="spotify widget"></iframe>)
            (<iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="1000" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>)
            : (<iframe className="rounded-xl" src="" width="100%" height="472" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="spotify album not found"></iframe>)
        }
        </div>    )
}

export default SpotifyWidget