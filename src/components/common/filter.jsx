import React from "react";
import PropTypes from "prop-types";

const Filter = props => {
  const {
    items,
    onItemSelect,
    currentItem,
    textProperty,
    valueProperty
  } = props;

  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          className={
            currentItem === item.name
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Filter.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

Filter.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  onHandleGenre: PropTypes.func.isRequired,
  textProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired
};

export default Filter;
