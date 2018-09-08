import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import MovieList from './components/MovieList';
import MovieSelection from './components/MovieSelection'
import * as actionCreators from './actions/MovieSelectionActions';


class App extends Component {

  componentDidMount() {
    this.props.getMovieList('batman');
  }

  render() {
    const { movies, selection, getMovieList } = this.props;
    return (
      <div className="App">
        <MovieSelection 
          value={selection}
          onChange={(e) => getMovieList(e)}
        />
        <MovieList movies={movies}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieSelection.movies,
  selection: state.movieSelection.selection
})

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
