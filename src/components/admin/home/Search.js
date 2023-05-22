import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div
      className={
        " border border-gray-600 rounded-md flex gap-4 overflow-hidden md:w-9/12 mx-auto"
      }
    >
      {/*    search icon */}
      <div className={"flex w-8 justify-center"}>
        <AiOutlineSearch className={"text-gray-500 m-auto text-xl"} />
      </div>
      <input
        className={"flex-1 h-10 focus:outline-none text-sm "}
        placeholder={"search for file"}
      />
    </div>
  );
};

export default Search;
