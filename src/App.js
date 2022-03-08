import React from "react";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Home, Cart } from "./components/pages";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPizzas, setIsLoaded } from "./redux/slices/pizzasSlice";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
      dispatch(setIsLoaded());
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Home} />
      </div>
    </div>
  );
}

export default App;
