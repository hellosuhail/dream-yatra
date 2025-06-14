import React, { useState } from 'react';

const MidNav = ({initalData}) => {
  // const [scroll , setScroll] = useState(false)
  
  const scrollDown =(topvalue)=>{
    
    window.scrollTo({
      top:topvalue,
      behavior:"smooth"
    })
  }
  return (
   <div className="hidden md:block z-0 bg-gray-100 md:absolute md:top-108 w-full max-w-6xl shadow-xl py-4 pl-30 rounded-3xl mx-auto">
  <nav className="md:flex w-full justify-between px-4">
    {initalData.map((data, index) => (
      <ul
        className="flex justify-between w-full text-gray-700 font-medium text-sm md:text-base"
        key={index}
      >
        <li className="hover:text-blue-600 cursor-pointer text-center" onClick={()=>scrollDown(data.top)}>{data.title}</li>
      </ul>
    ))}
  </nav>
</div>

  );
};

export default MidNav;
