import axios from "axios";
import { setIsLoading, setPizzas } from "./redux/slices/pizzasSlice";

export const fetchPizzas = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  const { data } = await axios.get("https://6227466ad1b3ff08c1aab20f.mockapi.io/pizzas");
  dispatch(setPizzas(data.pizzas));
};
