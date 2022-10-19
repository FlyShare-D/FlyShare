import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  destination: '',
  flight: [
    {id: 0, destination: "Germany", flightName: "Delta", price: 250, votes: 0}, 
    {id: 1, destination: "Germany", flightName: "American Airlines", price: 350, votes: 0}
  ],
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
    updateVotes: (state, action) => {
      const { category, id, votes } = action.payload 
      // this is where we will update state.flights
      if (category === 'flight') {
        // id = 1, vote 1
        for(let i = 0; i <state.length; i++){
          if(state[i].id === id){
            votes += 1;
          }
        }
        
      }
    }
  },
})

export const { increment, decrement, updateDestination, updateVotes} = counterSlice.actions;

export default counterSlice.reducer;