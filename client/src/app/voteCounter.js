import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  destination: '',
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
    }
  },
})

export const { increment, decrement, updateDestination} = counterSlice.actions;

export default counterSlice.reducer;