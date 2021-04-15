const SpotifyWidget = ({spotifyID, height}) => {
    return (
        <div className= "flex justify-center">
        {spotifyID !== "" ? 
            (<iframe className="rounded-xl" src={spotifyID} width="1000" height={height} frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>)
            : (<iframe className="rounded-xl" src="" width="100%" height="472" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>)
        }
        </div>    )
}

export default SpotifyWidget