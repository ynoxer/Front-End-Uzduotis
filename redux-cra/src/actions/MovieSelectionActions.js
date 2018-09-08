import axios from 'axios';

export const getMovieList = (selection) => dispatch => {
  dispatch({
    type: 'SET_SELECTION',
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
