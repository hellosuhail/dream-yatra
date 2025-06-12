import React from "react";

const Search = ({ searchInput }) => {
  return (
    <div className="md:absolute top- md:top-75 sm:w-2xl md:w-6xl left-30 mt-5">
      <div className="md:flex block md:flex-row justify-center bg-transparent text-black w-full  rounded-md shadow-md">
        <div className="w-full text-lg ">{searchInput}</div>
        <button className="w-full font-bold sm:w-40 h-16 ml-2 bg-[#39c9bb] cursor-pointer hover:bg-[#2cd5c4] text-white  rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
