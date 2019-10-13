import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TableHeader extends Component {
  raiseSort = path => {
    const { onSort } = this.props;
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  renderSortIcon = (column, sortColumn) => {
    if (sortColumn.path === column.path) {
      return sortColumn.order === "asc" ? (
        <FontAwesomeIcon icon="sort-down" style={{ cursor: "pointer" }} />
      ) : (
        <FontAwesomeIcon icon="sort-up" style={{ cursor: "pointer" }} />
      );
    }
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              onClick={() => this.raiseSort(column.path)}
              style={{ cursor: "pointer" }}
              key={column.path || column.key}
            >
              {column.label}
              {this.renderSortIcon(column, this.props.sortColumn)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
