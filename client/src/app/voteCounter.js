import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  destination: '',
  isLoggedIn: false,
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
    }
  },
})

export const { increment, decrement, updateDestination, setLoggedIn} = counterSlice.actions;

export default counterSlice.reducer;