import React from 'react'


const reasion=[
    {
        title:"Reasons for Bus Booking on Dreamviewer Yatra",
        text:"redBus offers key services that benefit passengers when booking bus tickets online, such as:",
        list:["Free Cancellation: Cancel bus tickets without paying cancellation charges. Receive a full refund 6 hours prior to departure. ","Change Travel Date: Select a Flexi ticket to modify your travel date at least 8 hours before departure. Receive a 50% refund for cancelling bus tickets 12 hours before the scheduled journey date","Booking for Women: Access exclusive deals for women travellers, view the number of women on your bus, enjoy priority helplines, and find buses preferred by women","Assurance Program: Secure a trip against the cancellation of tickets by bus operators and receive up to 500 INR in your wallet.","Earn Rewards: Refer your friend and get INR 100 in your redBus wallet after they complete their first trip. ","Primo Services: Select top-rated bus operators that offer timely and customer-friendly Primo services.","24/7 Customer Support: Receive 24/7 customer service for any assistance related to bus ticket bookings.","Instant Refund: Get an instant refund for cancellation or booking-related issues. ","Live Bus Tracking: Track your bus in real-time and plan your journey more efficiently."]
    }
]
const OnlineBus = () => {
  return (
    <div>
        <div className="border-b-1 mx-12 my-6 border-gray-500">
            <p className='font-bold py-2 text-2xl'>Online Bus Ticket Booking on Dreamviewer Yatra</p>
        </div>
        <p className='px-12 text-gray-500'>redBus is India’s most trusted bus ticket booking platform. The platform offers an easy-to-use online bus booking service with over 56+ million satisfied customers. Partnering with over 5200+ bus operators, redBus offers affordable prices and various bus types to choose from. Also, provides secure payment options and exclusive offers for a smooth and convenient booking experience.</p>
        <p className='px-12 py-2 text-gray-500'>Planning a trip with RTC, Government bus operators like APSRTC, TGSRTC, KSRTC (Kerala), RSRTC or private operators like VRL and Orange Travels? redBus offers easy access to lakhs of routes and a wide range of bus types such as AC or Non-AC, Sleeper, Seater, Volvo and more. With a wide range of bus options and services, redBus ensures a reliable and comfortable journey for every passenger.</p>
        {reasion.map((data,index)=>(
        <div key={index} className='px-12 py-2 '>
        <p className='text-bold text-2xl py-2'>{data.title}</p>
        <p  className=' py-2 text-gray-500 '>{data.text} </p>
        {data.list.map((li,i)=>(
        <ul key={i}>
            <li  className='px-6 py-2 list-disc text-gray-500'>{li}</li>
        </ul>))}
        </div>))}


    </div>
  )
}

export default OnlineBus