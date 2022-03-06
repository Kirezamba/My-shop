import React from "react";
import { Categories, PizzaBlock, SortPopup } from "../";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  console.log(items);

  const sortCategories = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" },
  ];
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup items={sortCategories} />
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
