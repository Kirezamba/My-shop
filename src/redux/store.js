import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filtersSlice";
import pizzasReducer from "./slices/pizzasSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer,
  },
});
