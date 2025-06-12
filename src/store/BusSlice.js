import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  buses: [
    // City Bus Routes 
    {
      id: nanoid(),
      category: "City",
      from: "Mumbai",
      to: "Pune",
      duration: "3 hours",
      price: 399,
      operator: "Neeta Travels",
      description: "Luxury express bus from Mumbai to Pune with reclining seats."
    },
    // Hill Station Bus Route
    {
      id: nanoid(),
      category: "Hill Station",
      from: "Dehradun",
      to: "Mussoorie",
      duration: "2 hours",
      price: 299,
      operator: "Uttarakhand Travels",
      description: "Mini coach from Dehradun to Mussoorie perfect for quick getaways."
    },
    // Pan-India Bus Routes
    {
      id: nanoid(),
      category: "India",
      from: "Ahmedabad",
      to: "Jaipur",
      duration: "12 hours",
      price: 899,
      operator: "Rajasthan Express",
      description: "Comfortable sleeper bus service covering heritage route."
    },
    // Pilgrimage Bus Routes
    {
      id: nanoid(),
      category: "Pilgrimage",
      from: "Chennai",
      to: "Tirupati",
      duration: "5 hours",
      price: 499,
      operator: "APSTC",
      description: "Regular service to Tirumala with early morning and evening options."
    },
  ],
  bookedBuses: [],
};

const busSlice = createSlice({
  name: "bus",
  initialState,
  reducers: {
    bookBus: (state, action) => {
      state.bookedBuses.push(action.payload);
    },
    deleteBus: (state, action) => {
      state.buses = state.buses.filter(bus => bus.id !== action.payload);
    },
  },
});

export const { bookBus, deleteBus } = busSlice.actions;
export default busSlice.reducer;
