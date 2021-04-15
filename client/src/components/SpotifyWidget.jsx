const SpotifyWidget = ({spotifyID, height}) => {
    return (
        <div className= "flex justify-center md:w-100">
        {spotifyID !== "" ? 
            (<iframe className="rounded-xl" src={spotifyID} width="100%" height={height} frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>)
            : (<iframe className="rounded-xl" src="" width="100%" height="472" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>)
        }
        </div>    )
}

export default SpotifyWidget