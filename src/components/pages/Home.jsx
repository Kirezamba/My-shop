import React from "react";
import { Categories, PizzaBlock, SortPopup } from "../";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { setCategory, setSortBy } from "../../redux/slices/filtersSlice";
import { fetchPizzas } from "../../api";
import LoadingBlock from "../LoadingPizza";
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
    if (sortBy === 0) {
      sortedPizzas = _.orderBy(filteredPizzas, ["rating"]);
    } else if (sortBy === 1) {
      sortedPizzas = _.orderBy(filteredPizzas, ["price"]);
    } else if (sortBy === 2) {
      sortedPizzas = _.orderBy(filteredPizzas, ["name"]);
    }

    return sortedPizzas;
  }
  const pizzas = getSortedPizzas();

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSortType = (index) => {
    dispatch(setSortBy(index));
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories onSelectItem={onSelectCategory} category={category} />
        <SortPopup sortBy={sortBy} onSelectSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? Array(12)
              .fill(0)
              .map((item, index) => <LoadingBlock key={index} />)
          : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
}
