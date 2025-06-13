import React from 'react'

const HandleTabs = () => {

    const tabData= [
        {name:"Napal",img:"/Images/Napal.jpg"},
        {name:"Thailand",img:"/Images/thailand.jpg"},
        {name:"singapore",img:"/Images/singhapora.jpg"},
        {name:"bhutan",img:"/Images/bhutan.avif"},
        {name:"Bali",img:"/Images/bali.jpg"},
        {name:"Almaty",img:"/Images/almaty.jpg"},
        {name:"Maldives",img:"/Images/Maldives.jpg"},
        {name:"mauritius",img:"/Images/mauritius.webp"},
        {name:"Sri Lanka",img:"/Images/Sri-Lanka.jpg"},
        {name:"Vietnam",img:"/Images/vietnam.jpg"},
        {name:"Hong Kong",img:"/Images/hong-kong.jpg"},
        {name:"Paris",img:"/Images/paris.jpg"},
        {name:"South Africa",img:"/Images/south-africa.jpg"},
        {name:"Sydney",img:"/Images/sydney.jpg"},
        {name:"Japan",img:"/Images/japan.webp"},
    ]
  return (
    <div>
       <div className="overflow-x-auto bg-base-200 py-4 px-3">
  <div className="flex flex-nowrap gap-4">
    {tabData.map((data, index) => (
      <div
        key={index}
        className="w-24 min-w-[6rem] flex flex-col items-center justify-center text-center bg-white p-3 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
      >
        <img
          src={data.img}
          alt={data.name}
          className="w-12 h-12 object-cover rounded-full border border-blue-300"
        />
        <p className="mt-2 text-xs font-semibold text-gray-700">{data.name}</p>
      </div>
    ))}
  </div>
</div>


    </div>
  )
}

export default HandleTabs