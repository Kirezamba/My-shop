import React from "react";
import { Categories, Header, PizzaBlock, SortPopup } from "./components";

import { db } from "./db";

function App() {
  const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const items = db.pizzas;

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories items={categories} />
              <SortPopup />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {items.map((item) => (
                <PizzaBlock key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
