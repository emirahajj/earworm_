const SpotifyWidget = ({spotifyID}) => {
    return (
        <div className= "flex justify-center">
        {spotifyID !== "" ? 
            (<iframe src={spotifyID} width="100%" height="472" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>)
            : (<iframe src="" width="100%" height="472" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>)
        }
        </div>    )
}

export default SpotifyWidget