import React from "react";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Home, Cart } from "./components/pages";
import { db } from "./db";

function App() {
  const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const items = db.pizzas;

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" render={() => <Home categories={categories} items={items} />} />
      </div>
    </div>
  );
}

export default App;
