import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoaded: false,
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.items = action.payload;
    },
    setIsLoaded: (state) => {
      state.isLoaded = true;
    },
  },
});
export const { setPizzas, setIsLoaded } = pizzasSlice.actions;
export default pizzasSlice.reducer;
