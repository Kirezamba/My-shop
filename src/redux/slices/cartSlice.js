import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state = initialState, action) => {
      !state.items[action.payload.id]
        ? (state.items[action.payload.id] = [action.payload])
        : state.items[action.payload.id].push(action.payload);
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
  },
});

export const { addToCart, setTotalPrice, setTotalCount } = cartSlice.actions;
export default cartSlice.reducer;
