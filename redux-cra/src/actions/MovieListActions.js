import axios from 'axios';

export const getBatmanList = () => dispatch => {
  let url = 'http://www.omdbapi.com/?s=batman&apikey=a4ecd086&';
  axios.get(url).then( response => {
    console.log(response);
    dispatch({
      type: 'GET_BATMAN_LIST',
      content: response
    }) 
  })
}
