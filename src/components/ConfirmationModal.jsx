import React from 'react';

const ConfirmationModal = ({ flight, user }) => (
  <div className="mt-4 p-4 bg-green-100 border border-green-500 rounded">
    <p className="font-bold">Flight Booked Successfully!</p>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>Flight to: {flight.destination}</p>
  </div>
);

export default ConfirmationModal;
