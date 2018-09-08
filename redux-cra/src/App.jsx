import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import './App.css';
import MovieList from './components/MovieList';
import * as actionCreators from './actions/MovieListActions';


class App extends Component {

  componentDidMount() {
    this.props.getBatmanList();
  }

  render() {
    const { getBatmanList } = this.props;
    const { movies } = this.props;
    return (
      <div className="App">
        <MovieList movies={movies}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieList.movies
})

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
