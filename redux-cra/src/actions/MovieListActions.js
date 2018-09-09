import axios from 'axios';

export const getMovieList = (selection) => dispatch => {
  dispatch({
    type: 'SET_MOVIE_SELECTION',
    selection: selection
  })
  let url = 'http://www.omdbapi.com/?s=' + selection + '&apikey=a4ecd086&';
  axios.get(url).then( response => {
    dispatch({
      type: 'GET_MOVIE_LIST',
      content: response
    }) 
  })
}

export const sortMovieList = (selection) => dispatch => {
  dispatch({
    type: 'SORT_MOVIE_LIST',
    selection: selection
  })
}
