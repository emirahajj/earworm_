import React from "react";
import Circles from "../components/Circles.jsx";
import Navbar from "../components/Navbar"
//import "./styles/main.css";

const Genres = () => {
  return (
    <div className="ml-10">
        <Navbar />
      <h1 className="text-4xl font-bold my-10 text-center">List of Genres</h1>
      <Circles />
    </div>
  );
}

export default Genres;

