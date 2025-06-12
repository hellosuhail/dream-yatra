import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cruises: [
    {
      id: nanoid(),
      category: "World Dream Cruises",
      name: "Asian Wonders Cruise",
      departurePort: "Singapore",
      duration: "5 Nights / 6 Days",
      price: 49999,
      description:
        "Sail through Southeast Asia with luxurious amenities and world-class dining onboard the World Dream.",
    },

    {
      id: nanoid(),
      category: "NCL Cruise",
      name: "Alaska Glacier Cruise",
      departurePort: "Seattle, USA",
      duration: "7 Nights / 8 Days",
      price: 119999,
      description:
        "Experience the majestic glaciers, whales, and wilderness of Alaska with NCL’s premium cruise experience.",
    },

    {
      id: nanoid(),
      category: "Travel Destination Guide",
      name: "Best Cruise Cities",
      guideType: "City Guide",
      highlights: ["Miami", "Barcelona", "Singapore", "Sydney"],
      description:
        "Explore the world’s most popular cruise departure cities and what to do before and after your cruise.",
    },

    {
      id: nanoid(),
      category: "Cruise Destinations",
      name: "Caribbean Cruise",
      region: "Caribbean Islands",
      duration: "7 Nights / 8 Days",
      popularStops: ["Bahamas", "Jamaica", "Cozumel"],
      description:
        "Soak up the sun, explore beaches, and enjoy vibrant island cultures.",
    },
  ],
  bookedCruises: [],
};

const cruiseSlice = createSlice({
  name: "cruise",
  initialState,
  reducers: {
    bookCruise: (state, action) => {
      state.bookedCruises.push(action.payload);
    },
    deleteCruise: (state, action) => {
      state.cruises = state.cruises.filter((c) => c.id !== action.payload);
    },
  },
});

export const { bookCruise, deleteCruise } = cruiseSlice.actions;
export default cruiseSlice.reducer;
