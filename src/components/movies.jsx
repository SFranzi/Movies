import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Filter from "./common/filter";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 3,
    currentPage: 1,
    genres: [],
    currentGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" }
  };

  //handleDelete = movie => {
  //deleteMovie(movie._id);
  //const movies = getMovies();
  //this.setState({ movies });
  //};

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  //handleLike = movie => {
  //movie.liked = !movie.liked;
  //const movies = getMovies();
  //this.setState({ movies });
  //

  handleLike = movie => {
    console.log("In Like");
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePage = i => {
    this.setState({ currentPage: i });
  };

  handleGenreSelect = genreName => {
    const genre = genreName === "All" ? "All" : genreName.name;
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { pageSize, currentPage, currentGenre, sortColumn } = this.state;

    //1.Filter Data
    //const filtered = currentGenre && currentGenre._id? allMovies.filter(m => m.genre._id === currentGenre._id) : allMovies;
    const filteredMovies = this.state.movies.filter(m =>
      currentGenre === "All Genres" ? m : m.genre.name === currentGenre
    );
    //2.Sort Data
    const sortedMovies = _.orderBy(
      filteredMovies,
      sortColumn.path,
      sortColumn.order
    );

    //3. Paginate Data
    const movies = paginate(sortedMovies, currentPage, pageSize);

    return { sortedMovies, movies };
  };

  render() {
    //const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      genres,
      currentGenre,
      sortColumn
      //movies: allMovies
    } = this.state;

    const { sortedMovies, movies } = this.getPagedData();

    const { length: count } = sortedMovies;

    if (count === 0)
      return (
        <div className="container">
          <div className="m-4 alert alert-dark" role="alert">
            <div>There are no movies in the database.</div>
          </div>
        </div>
      );
    return (
      <div className="container">
        <div className="row m-5 ">
          <div className="col-md-3">
            <Filter
              items={genres}
              currentItem={currentGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <div className="alert alert-dark" role="alert">
              Showing {count} in the database
            </div>
            <MoviesTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              onPageClick={this.handlePage}
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }

  //getMoviesPerPage() {
  //const { currentPage, movies } = this.state;
  //const lastMovie = currentPage * 4;
  //const firstMovie = lastMovie - 4;
  //return movies.slice(firstMovie, lastMovie);
  //}
}

export default Movies;
