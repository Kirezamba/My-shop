import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "rating",
  category: null,
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
