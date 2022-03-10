import React from "react";
import { Categories, PizzaBlock, SortPopup, LoadingPizza } from "../";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { setCategory, setSortBy } from "../../redux/slices/filtersSlice";
import { fetchPizzas } from "../../api";
import { addToCart } from "../../redux/slices/cartSlice";
export default function Home() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(({ pizzas }) => pizzas);
  const { sortBy, category } = useSelector(({ filters }) => filters);
  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [sortBy, category]);
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
    if (sortBy === "rating") {
      sortedPizzas = _.orderBy(filteredPizzas, ["rating"]);
    } else if (sortBy === "price") {
      sortedPizzas = _.orderBy(filteredPizzas, ["price"][0]);
    } else if (sortBy === "name") {
      sortedPizzas = _.orderBy(filteredPizzas, ["name"]);
    }

    return sortedPizzas;
  }
  const pizzas = getSortedPizzas();

  const handleAddPizza = (obj) => {
    dispatch(addToCart(obj));
    console.log(obj.id);
  };

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSortType = (type) => {
    dispatch(setSortBy(type));
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories onSelectItem={onSelectCategory} category={category} />
        <SortPopup sortBy={sortBy} onSelectSortType={onSelectSortType} activeSortType={sortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? Array(12)
              .fill(0)
              .map((item, index) => <LoadingPizza key={index} />)
          : pizzas.map((item, index) => (
              <PizzaBlock onAddToCart={handleAddPizza} key={item.id} {...item} index={index} />
            ))}
      </div>
    </div>
  );
}
