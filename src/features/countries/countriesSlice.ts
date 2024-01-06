import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CountriesState } from "./types/countriesState";
import AvailableCountries from "./models/availableCountries";

export const fetchCountries = createAsyncThunk("countries/fetch", async () => {
  const availableCountries = new AvailableCountries();
  const response = await availableCountries.getAvailableCountries();
  return response;
});

const initialState: CountriesState = {
  countries: [],
  loading: false,
  customError: null,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.customError = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.customError = action.payload ? action.payload.toString() : "An unknown Error";
        console.dir(action.payload);
      });
  },
});

export default countriesSlice.reducer;
