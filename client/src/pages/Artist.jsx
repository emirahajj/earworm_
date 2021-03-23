import React from "react";
import Navbar from "../components/Navbar"
import Image from "../components/Image.jsx";
// import Artists from "../artist_list.js";

const Artist = () => {
  return (
    <div>
    <Navbar />
      <h2>A-</h2>
      {/* {Artists.map(
        Artist => (
        <Image
          key={Artist.id}
          src={Artist.artisturl}
          name={Artist.name}
          genre={Artist.genre}
           />
  )
)} */}
    </div>
  );
}

export default Artist;

