import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CountryState } from "../types/countryState";
import CountryModel from "../models/countryModel";

export const fetchCountryInfo = createAsyncThunk(
  "countryInfo/fetch",
  async (countryCode: string) => {
    const countryModel = new CountryModel(countryCode);
    const response = await countryModel.countryInfo();
    return response;
  }
);

export const fetchCountryHolidays = createAsyncThunk(
  "countryHolidays/fetch",
  async ({ countryCode, year }: { countryCode: string; year: number }) => {
    const countryModel = new CountryModel(countryCode, year);
    const response = await countryModel.countryHolidays();
    return response;
  }
);

const initialState: CountryState = {
  countryInfo: {
    commonName: null,
    officialName: null,
    countryCode: null,
    region: null,
    borders: null,
  },
  holidays: [],
  longWeekend: [],
  nextHolidays: [],
  infoLoading: false,
  infoCustomError: undefined,
  holidaysLoading: false,
  holidaysCustomError: undefined,
};

export const countriesSlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryInfo.pending, (state) => {
        state.infoLoading = true;
        state.infoCustomError = undefined;
      })
      .addCase(fetchCountryInfo.fulfilled, (state, action) => {
        state.infoLoading = false;
        state.countryInfo = action.payload.countryInfo;
        state.nextHolidays = action.payload.nextHolidays;
      })
      .addCase(fetchCountryInfo.rejected, (state, action) => {
        state.infoLoading = false;
        state.infoCustomError = action.error.message;
      })
      .addCase(fetchCountryHolidays.pending, (state) => {
        state.holidaysLoading = true;
        state.holidaysCustomError = undefined;
      })
      .addCase(fetchCountryHolidays.fulfilled, (state, action) => {
        state.holidaysLoading = false;
        state.holidays = action.payload.holidays;
        state.longWeekend = action.payload.longWeekend;
      })
      .addCase(fetchCountryHolidays.rejected, (state, action) => {
        state.holidaysLoading = false;
        state.holidaysCustomError = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
