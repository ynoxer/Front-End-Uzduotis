import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import MovieList from './components/MovieList';
import MovieSelection from './components/MovieSelection'
import * as actionCreators from './actions/MovieListActions';


class App extends Component {

  componentDidMount() {
    this.props.getMovieList('batman');
  }

  render() {
    const { movies, movie_selection, sort_selection, getMovieList, sortMovieList } = this.props;
    return (
      <div className="App">
        <h1 className="header">Movies</h1>
        <MovieSelection 
          value={movie_selection}
          onChange={(e) => getMovieList(e)}
        />
        <MovieList
          movies={movies}
          value={sort_selection}
          onChange={(e) => sortMovieList(e)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieList.movies,
  movie_selection: state.movieList.movie_selection,
  sort_selection: state.movieList.sort_selection

})

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
