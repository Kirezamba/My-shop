import axios from "axios";
import { setIsLoading, setPizzas } from "./redux/slices/pizzasSlice";

export const fetchPizzas = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  const { data } = await axios.get("http://localhost:3000/db.json");
  dispatch(setPizzas(data.pizzas));
};
