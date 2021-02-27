import React from "react";

function Entry(props) {
  return (
    <div className="flex flex-row ml-2 mr-6 mb-6">
      <div className="flex flex-row justify-center mr-2 self-center w-16">
      <div>
        <h1 className="text-gray-400 text-2xl">{props.rank}</h1>
      </div>
    </div>
    <div className="w-24 bg-transparent flex items-center">
      <img className="rounded-md" alt="" src={props.image}></img>
    </div>
    <div className=" w-full ml-6 self-center" >
      <p className=" text-gray-400 text-md xl:text-2xl">{props.title}</p>
      <p className=" text-gray-600 italic xl:text-2xl">{props.artist}</p>
    </div>
       </div>

  );
}

export default Entry;
