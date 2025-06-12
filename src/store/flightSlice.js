// store/flightSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  flights: [
    {
      id: nanoid(),
      airline: "IndiGo",
      from: "Delhi",
      to: "Mumbai",
      departureTime: "2025-06-15T08:00",
      arrivalTime: "2025-06-15T10:30",
      price: 4500,
    },
    {
      id: nanoid(),
      airline: "Air India",
      from: "Bangalore",
      to: "Kolkata",
      departureTime: "2025-06-16T13:00",
      arrivalTime: "2025-06-16T15:45",
      price: 5200,
    },
    {
      id: nanoid(),
      airline: "SpiceJet",
      from: "Chennai",
      to: "Hyderabad",
      departureTime: "2025-06-17T09:15",
      arrivalTime: "2025-06-17T10:30",
      price: 3000,
    },
    {
      id: nanoid(),
      airline: "IndiGo",
      from: "NewYork",
      to: "Manali",
      departureTime: "2025-08-15T08:00",
      arrivalTime: "2025-08-15T10:30",
      price: 8500,
    },
    {
      id: nanoid(),
      airline: "Air India",
      from: "Bangalore",
      to: "Gurgoan",
      departureTime: "2025-09-16T13:00",
      arrivalTime: "2025-09-16T15:45",
      price: 11200,
    },
  ],
  bookedFlights: [],
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    addFlight: (state, action) => {
      state.flights.push({ id: nanoid(), ...action.payload });
    },
    bookFlight: (state, action) => {
      state.bookedFlights.push(action.payload);
    },
    deleteFlight: (state, action) => {
      state.flights = state.flights.filter(f => f.id !== action.payload);
    },
    updateFlight: (state, action) => {
      const index = state.flights.findIndex(f => f.id === action.payload.id);
      if (index !== -1) state.flights[index] = action.payload;
    },
  },
});

export const { addFlight, bookFlight, deleteFlight, updateFlight } = flightSlice.actions;
export default flightSlice.reducer;
