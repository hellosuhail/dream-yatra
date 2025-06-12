import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './flightSlice';
import packageReducer from './packageSlice';
import hotelReducer from "./hotelSlice";
import busReducer from "./BusSlice";
import cursieReducer from "./CrusieSlice";


export const store = configureStore({
  reducer: {
    flight: flightReducer,
    package: packageReducer,
    hotel:hotelReducer,
    bus:busReducer,
    cursie:cursieReducer,
  },
});

