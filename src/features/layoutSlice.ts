import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LayoutState {
  isMenu: boolean;
}

const initialState: LayoutState = {
  isMenu: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setIsMenu: (state, action: PayloadAction<boolean>) => {
      state.isMenu = action.payload;
    },
  },
});

export const { setIsMenu } = layoutSlice.actions;
export default layoutSlice.reducer;
