
export default (state = {}, action) => {
 switch (action.type) {
  case 'GET_BATMAN_LIST':
   return {
    ...state,
    movies: action.content.data.Search
   }
  default:
   return state
 }
}