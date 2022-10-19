import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  destination: '',
  flights: [],
  hotels: [],
  events: [],
  flightIcon: false,
  hotelIcon: false,
  eventIcon: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    updateDestination: (state, action) => {
      state.destination = action.payload
    },
    updateFlights: (state, action) => {
      state.flights = action.payload
    },
    updateHotels: (state, action) => {
      state.hotels = action.payload
    },
    updateEvents: (state, action) => {
      state.events = action.payload
    },
    updateFlightIcon: (state, action) => {
      state.flightIcon = action.payload
    },
    updateHotelIcon: (state, action) => {
      state.hotelIcon = action.payload
    },
    updateventIcon: (state, action) => {
      state.eventIcon = action.payload
    },
  },
})

export const { increment, decrement, updateDestination, updateFlights, updateHotels, updateEvents, updateFlightIcon, updateHotelIcon, updateventIcon} = counterSlice.actions;

export default counterSlice.reducer;