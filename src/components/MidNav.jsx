import React from 'react';

const MidNav = ({initalData}) => {
  return (
    <div className="bg-gray-100 absolute top-108 w-6xl text-black shadow-xl py-4 rounded-3xl">
      <nav className=" md:flex hidden w-full  justify-between px-4">
        {initalData.map((data,index)=>(
        <ul className="flex justify-between w-fulltext-gray-700 font-medium text-sm md:text-base" key={index}>
          <li className="hover:text-blue-600 cursor-pointer">{data}</li>
        </ul>
       )) }
      </nav>
    </div>
  );
};

export default MidNav;
