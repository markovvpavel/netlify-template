import { Locale, Theme } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  locale: Locale;
  theme: Theme;
}

const initialState: AppState = {
  locale: "en",
  theme: "dark",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },

    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },

    restoreApp: (_, action: PayloadAction<AppState>) => action.payload,
  },
});

export const { setLocale, setTheme, restoreApp } = appSlice.actions;
export default appSlice.reducer;
