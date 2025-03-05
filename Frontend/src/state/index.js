import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
}); 

export const { toggleMode } = globalSlice.actions;
export default globalSlice.reducer;
