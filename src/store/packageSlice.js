import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  packages: [
    {
      id: nanoid(),
      title: "Romantic Shimla Honeymoon",
      type: "Honeymoon",
      location: "Shimla, Himachal Pradesh",
      duration: "5 Days / 4 Nights",
      price: 24999,
      description:
        "Enjoy a romantic getaway in the snowy mountains of Shimla with candlelight dinners, private sightseeing, and cozy stays.",
    },
    {
      id: nanoid(),
      title: "Kerala Backwater Bliss",
      type: "Indian Holiday",
      location: "Alleppey, Kerala",
      duration: "6 Days / 5 Nights",
      price: 19999,
      description:
        "Cruise through serene backwaters on a houseboat, explore lush landscapes, and enjoy authentic South Indian cuisine.",
    },
    {
      id: nanoid(),
      title: "Goa Beach Party Week",
      type: "Holiday Idea",
      location: "Goa",
      duration: "4 Days / 3 Nights",
      price: 14999,
      description:
        "A perfect holiday idea for friends or solo travelers to unwind at the beaches, enjoy water sports, and vibrant nightlife.",
    },
    {
      id: nanoid(),
      title: "Swiss Alps Adventure",
      type: "International Holiday",
      location: "Switzerland",
      duration: "7 Days / 6 Nights",
      price: 124999,
      description:
        "Experience the magic of the Swiss Alps with scenic train rides, snow activities, and world-class hospitality.",
    },
  ],
  addpackage: [],
};

const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    addPackage: (state, action) => {
      state.packages.push({ id: nanoid(), ...action.payload });
    },
    bookPackage: (state, action) => {
      state.addpackage.push(action.payload);
    },
    deletePackage: (state, action) => {
      state.packages = state.packages.filter(p => p.id !== action.payload);
    },
    updatePackage: (state, action) => {
      const index = state.packages.findIndex(p => p.id === action.payload.id);
      if (index !== -1) state.packages[index] = action.payload;
    },
  },
});
export const { addPackage, bookPackage, deletePackage, updatePackage } = packageSlice.actions;
export default packageSlice.reducer;
