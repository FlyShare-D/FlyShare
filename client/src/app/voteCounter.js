import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  destination: '',
  isLoggedIn: false,
  flights: [],
  hotels: [],
  events: [],
  information: '',
  price: 0,
  flightIcon: false,
  hotelIcon: false,
  eventIcon: false,
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
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
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
    updateEventIcon: (state, action) => {
      state.eventIcon = action.payload
    },
    updateInformation: (state, action) => {
      state.information = action.payload
    },
    updatePrice: (state, action) => {
      state.price = action.payload
    },
    clearIcon: (state) => {
      state.flightIcon = false;
      state.hotelIcon = false;
      state.eventIcon = false;
      state.information = '';
      state.price = 0;
    }
  },
})

export const { increment, decrement, updateDestination, updateFlights, updateHotels, updateEvents, updateFlightIcon, updateHotelIcon, updateEventIcon, updateInformation, updatePrice, clearIcon} = counterSlice.actions;

export default counterSlice.reducer;