import React from "react";
import { Categories, PizzaBlock, SortPopup } from "../";

export default function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => (
          <PizzaBlock
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            types={item.types}
            price={item.price}
            category={item.category}
            rating={item.rating}
            sizes={item.sizes}
          />
        ))}
      </div>
    </div>
  );
}
