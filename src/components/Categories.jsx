import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/filtersSlice";

export default function Categories() {
  const items = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  const category = useSelector(({ filters }) => filters.category);
  const dispatch = useDispatch();

  const onSelectItem = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="categories">
      <ul>
        <li className={category === null ? "active" : ""} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={category === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}
