const SpotifyWidget = ({spotifyID, height}) => {


    return (
        <div className= "flex justify-center w-full fixed inset-x-0 bottom-0" >
        {spotifyID !== "" ? 
            (<iframe className="rounded-xl" id="iframe" src={spotifyID} width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="spotify album found"></iframe>)
            : (<iframe className="rounded-xl" id="iframe" src="" width="100%" height="472" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="spotify album not found"></iframe>)
        }
        </div>    )
}

export default SpotifyWidget