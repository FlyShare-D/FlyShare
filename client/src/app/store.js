import { configureStore } from '@reduxjs/toolkit'
import voteCounterReducer from './voteCounter'

export const store = configureStore({
  reducer: {
    counter: voteCounterReducer, 
  },
})