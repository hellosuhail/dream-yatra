import React from 'react'

const Search = ({searchInput}) => {
  return (
    <div className='md:absolute top- md:top-75 w-full   md:w-6xl left-30'>
          <div className=" md:flex md:flex-row justify-center bg-transparent text-black w-full  rounded-md shadow-md">
            <div className="w-full">
        {searchInput}
</div>
        <button className="w-full font-bold sm:w-40 h-16 bg-[#39c9bb] cursor-pointer hover:bg-[#2cd5c4] text-white  rounded">
          Search
        </button>
      </div>
    </div>
  )
}

export default Search