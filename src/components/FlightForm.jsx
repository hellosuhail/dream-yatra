// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { bookFlight } from '../store/flightSlice';
// import ConfirmationModal from './ConfirmationModal';
// import { useNavigate } from 'react-router-dom';

// const FlightForm = ({ flight, closeForm }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const [confirmed, setConfirmed] = useState(false);

//   // Validation: Check if all required fields are filled
//   const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '';

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isFormValid) return;
//     dispatch(bookFlight({ ...formData, flightId: flight.id }));
//     setConfirmed(true);
//     alert('Booking confirmed successfully!');
//     setFormData({name:"",email:""})
//   };

//   return (
//     <>
//       {/* Modal Overlay */}
//       <div className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 relative">
//           <h3 className="text-xl font-semibold mb-4 text-black text-center">
//             Book Flight: <span className="text-blue-600">{flight.airline}</span>
//           </h3>

//           <form onSubmit={handleSubmit} className="space-y-4 ">
//             {/* User Inputs */}
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-2 border rounded text-black"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 border  text-black "
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               required
//             />

//             {/* Flight Info (readonly) */}
//             {[
//               [`Airline`, flight.airline],
//               [`From`, flight.from],
//               [`To`, flight.to],
//               [`Destination`, flight.destination || flight.to],
//               [`Departure`, flight.departureTime],
//               [`Arrival`, flight.arrivalTime],
//               [`Price`, `₹${flight.price}`]
//             ].map(([label, value]) => (
//               <input
//                 key={label}
//                 type="text"
//                 readOnly
//                 className="w-full p-2 border rounded bg-gray-100 text-black"
//                 value={`${label}: ${value}`}
//               />
//             ))}

//             {/* Buttons */}
//             <div className="flex justify-between mt-4">
//               <button
//                 type="submit"
//                 disabled={!isFormValid}
//                 className={`px-4 py-2 rounded text-white ${
//                   isFormValid ? 'bg-green-500 hover:bg-green-600' : 'bg-green-300 cursor-not-allowed'
//                 }`}
//               >
//                 Confirm Booking 
//               </button>
//               <button
//                 type="button"
//                 onClick={closeForm}
//                 className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>

//           {/* Close Button */}
//           <button
//             onClick={closeForm}
//             className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
//             aria-label="Close"
//           >
//             &times;
//           </button>
//         </div>
//       </div>

//       {confirmed && <ConfirmationModal flight={flight} user={formData} />}
//     </>
//   );
// };

// export default FlightForm;
