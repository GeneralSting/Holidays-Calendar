import { configureStore } from '@reduxjs/toolkit'
import { optionsSlice } from './features/headerOptions';
import { countriesSlice } from './features/countries';
import { countrySlice } from './features/selectedCountry';

const store = configureStore({
  reducer: {
    countries: countriesSlice,
    country: countrySlice,
    options: optionsSlice
  }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch