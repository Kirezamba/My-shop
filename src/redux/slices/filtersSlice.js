import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  sortBy: "popular",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});
export const { setSortBy, setCategory } = filtersSlice.actions;
export default filtersSlice.reducer;
