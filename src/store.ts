import { configureStore } from '@reduxjs/toolkit'
import countriesSlice from './features/countries/data/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesSlice
  }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch