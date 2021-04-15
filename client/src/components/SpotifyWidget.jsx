const SpotifyWidget = ({spotifyID}) => {
    return (
        <div className= "flex justify-center">
        {spotifyID !== "" ? 
            (<iframe src={spotifyID} width="100%" height="472" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="spotify"></iframe>)
            : (<iframe src="" width="100%" height="472" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="spotify"></iframe>)
        }
        </div>    )
}

export default SpotifyWidget