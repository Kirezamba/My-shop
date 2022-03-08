import React from "react";
import { categories } from "../constants";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({ onSelectItem, category }) {
  return (
    <div className="categories">
      <ul>
        <li className={category === null ? "active" : ""} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {categories &&
          categories.map((name, index) => (
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
});
Categories.defaultProps = {
  category: null,
};
Categories.propTypes = {
  onSelectItem: PropTypes.func.isRequired,
};
export default Categories;
