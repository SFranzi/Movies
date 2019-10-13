import _ from "lodash";

//export function paginate(movies, currentPage) {
//const lastMovie = currentPage * 4;
//const firstMovie = lastMovie - 4;
//return movies.slice(firstMovie, lastMovie);
//}

export function paginate(movies, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  //creates a lodash wrapper
  //the value method returns converts the lodash object back into
  //a regular array.
  return _(movies)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
