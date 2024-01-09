import { createSlice } from "@reduxjs/toolkit";
import { OptionsState } from "../types/optionsState";
import LanguageStorage from "../models/languageStorage";
import ThemeStorage from "../models/themeStorage";

const languageStorage = new LanguageStorage();
const themeStorage = new ThemeStorage();

const initialState: OptionsState = {
  appTheme: themeStorage.getValue(),
  language: languageStorage.getValue(),
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setAppTheme: (state, action) => {
      state.appTheme = action.payload
      themeStorage.setValue(action.payload);
    },
    setLanguage: (state, action) => {
      state.language = action.payload
      languageStorage.setValue(action.payload);
    }
  }
})

export const { setAppTheme, setLanguage } = optionsSlice.actions;
export default optionsSlice.reducer;