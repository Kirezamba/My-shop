import React from "react";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Home, Cart } from "./components/pages";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => setItems(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" render={() => <Home items={items} />} />
      </div>
    </div>
  );
}

export default App;
