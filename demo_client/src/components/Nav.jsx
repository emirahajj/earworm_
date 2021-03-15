import React from "react";
import {ReactComponent as Headphones} from '../headphones.svg';


export default function Nav() {
  return (
    <div className="navvy flex bg-vscode-base justify-end mt-2 flex-row w-full">
    <div className="flex flex-row mr-3">
      <div className=" flex items-end">
        <h1 className="text-gray-400 text-3xl mr-2">earworm</h1>
      </div>
      <Headphones/>
    </div>
  </div>
  );
}

