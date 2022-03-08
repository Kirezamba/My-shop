import React from "react";
import { sortItems } from "../constants";
import PropTypes from "prop-types";

const SortPopup = React.memo(function SortPopup({ sortBy, onSelectSortType }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const activeLabel = sortItems[sortBy].name;
  const onSortSelect = (index) => {
    onSelectSortType(index);
    setVisiblePopup(false);
  };
  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  const sortRef = React.useRef(null);

  function handleOutsideClick(e) {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  }
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={visiblePopup ? "rotated" : ""}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {sortItems &&
              sortItems.map((obj, index) => (
                <li
                  onClick={() => onSortSelect(index)}
                  className={sortBy === index ? "active" : ""}
                  key={index}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  sortBy: PropTypes.number.isRequired,
  onSelectSortType: PropTypes.func,
};

export default SortPopup;
