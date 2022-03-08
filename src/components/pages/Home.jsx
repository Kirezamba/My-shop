import React from "react";
import { Categories, PizzaBlock, SortPopup } from "../";
import { useSelector } from "react-redux";
import _ from "lodash";
export default function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const sortBy = useSelector(({ filters }) => filters.sortBy);
  const category = useSelector(({ filters }) => filters.category);

  function getFilteredPizzas() {
    let pizzas;
    const filteredPizzas = items.filter((item) => item.category === category);
    if (category === null) {
      pizzas = items;
    } else {
      pizzas = filteredPizzas;
    }
    return pizzas;
  }

  const filteredPizzas = getFilteredPizzas();

  function getSortedPizzas() {
    let sortedPizzas;
    if (sortBy === 0) {
      sortedPizzas = _.orderBy(filteredPizzas, ["rating"], ["asc"]);
    } else if (sortBy === 1) {
      sortedPizzas = _.orderBy(filteredPizzas, ["price"], ["asc"]);
    } else if (sortBy === 2) {
      sortedPizzas = _.orderBy(filteredPizzas, ["name"], ["asc"]);
    }

    return sortedPizzas;
  }
  const pizzas = getSortedPizzas();

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((item) => (
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
