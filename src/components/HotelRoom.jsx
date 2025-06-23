import React from 'react'
import { HotelRoomType } from './CardData/hotels'
const HotelRoom = () => {
  return (
    <div>
        <div className="md:flex gap-6 flex-1/4 items-center px-4 md:px-10">
        {HotelRoomType.map((data, index)=>(
           <div key={index} className="card hover:shadow-2xl bg-base-100 w-96 ">
  <figure>
    <img
      src={data.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.text}</p>
    <p>{data.textOne}</p>
    <p>{data.textTwo}</p>
    <p>{data.textThree}</p>
    <p>{data.textFour}</p>
    <p>{data.textFive}</p>
    <p>{data.textSix}</p>
    <p>{data.textSeven}</p>
    <p>{data.textEight}</p>
    <p>{data.textNine}</p>
    <p>{data.textTen}</p>
    <div className="flex w-full justify-between items-center ">
        <p className='text-[12px] text-red-500 '>{data.leftRoom}</p>
        <p className='text-xl font-bold'>{data.price}</p>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-accent w-full">Buy Now</button>
    </div>
  </div>
</div>))}
        </div>
    </div>
  )
}

export default HotelRoom