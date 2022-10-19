import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const initialState = {
  count: 0,
  destination: '',
  flights: [
    { id: 0, destination: 'Italy', name: 'Delta', price: 250, votes: 2 },
    { id: 1, destination: 'Italy', name: 'American Airlines', price: 350, votes: 0 },
  ],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      console.log('increment in redux store');
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    updateDestination: (state, action) => {
      state.destination = action.payload;
    },
    updateVoteFlight: async (state, action) => {
      const { id, category, destination } = action.payload;
      const ids = state.flights.map((flight) => flight.id);
      const index = ids.indexof(id);
      const { flightName, votes } = state.flights[index];

      // let description = '';
      // if (category === 'flight') description += 'flightName';
      // if (category === 'hotel') description += 'hotelName';
      // if (category === 'event') description += 'eventDetails';

      const body = { destination, flightName, votes };

      const response = await fetch(`/vote/${category}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('data', data);
        })
        .catch((err) => {
          console.error('Error in Flight Post Vote :', err);
        });
    },
    updateVoteHotel: async (state, action) => {
      const { id, category, destination } = action.payload;
      const ids = state.hotels.map((hotel) => hotel.id);
      const idx = ids.indexof(id);
      const { hotelName, votes } = state.hotels[idx];

      const body = { destination, hotelName, votes };
      const response = await fetch(`/vote/${category}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('data', data);
        })
        .catch((err) => {
          console.error('Error in Flight Post Vote :', err);
        });
    },
    updateVoteEvent: async (state, action) => {
      const { id, category, destination } = action.payload;
      const ids = state.events.map((event) => event.id);
      const idx = ids.indexof(id);
      const { eventName, votes } = state.events[idx];

      const body = { destination, eventName, votes };
      const response = await fetch(`/vote/${category}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('data', data);
        })
        .catch((err) => {
          console.error('Error in Flight Post Vote :', err);
        });
    },
  },
});

export const {
  increment,
  decrement,
  updateDestination,
  updateVoteFLight,
  updateVoteHotel,
  updateVoteEvent,
} = counterSlice.actions;
export default counterSlice.reducer;
