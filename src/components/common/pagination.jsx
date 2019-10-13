import React from "react";
//_ is a common convention
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageClick, currentPage }) => {
  //const { itemsCount, pageSize, onPageClick, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  if (pagesCount === 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(i => (
          <li
            key={i}
            className={i === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageClick(i)}>
              {i}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
