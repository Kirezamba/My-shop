import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: true,
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPizzas: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
  },
});
export const { setIsLoading, setPizzas } = pizzasSlice.actions;
export default pizzasSlice.reducer;
