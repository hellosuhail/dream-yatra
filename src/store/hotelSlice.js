import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  hotels:[
    {
      id: nanoid(),
      category: "Indian",
      name: "The Leela Palace",
      location: "New Delhi, India",
      rating: 5,
      pricePerNight: 8999,
      description:
        "Luxury hotel in the heart of New Delhi offering royal hospitality and modern amenities.",
    },

    {
      id: nanoid(),
      category: "Hill Station",
      name: "The Oberoi Cecil",
      location: "Shimla, Himachal Pradesh",
      rating: 4.5,
      pricePerNight: 7499,
      description:
        "Colonial charm hotel in Shimla offering panoramic hill views and spa facilities.",
    },

    {
      id: nanoid(),
      category: "Pilgrimage",
      name: "Hotel Temple View",
      location: "Varanasi, Uttar Pradesh",
      rating: 4,
      pricePerNight: 3499,
      description:
        "Stay near Kashi Vishwanath Temple with views of the Ganga Aarti from rooftop dining.",
    },

    {
      id: nanoid(),
      category: "International",
      name: "Marina Bay Sands",
      location: "Singapore",
      rating: 5,
      pricePerNight: 17999,
      description:
        "Famous sky park infinity pool hotel offering premium rooms with a view of Singapore skyline.",
    },
  ],
  bookedHotels: [],
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    bookHotel: (state, action) => {
      state.bookedHotels.push(action.payload);
    },
    deleteHotel: (state, action) => {
      state.hotels = state.hotels.filter(
        (hotel) => hotel.id !== action.payload
      );
    },
  },
});

export const { bookHotel, deleteHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
