
export default (state = {}, action) => {
 switch (action.type) {
  case 'SET_SELECTION':
    if (action.selection === 'batman') {
      console.log("I'm The Goddamn Batman!")
    }
    return {
      ...state,
      selection: action.selection
    }
  case 'GET_MOVIE_LIST':
   return {
    ...state,
    movies: action.content.data.Search
   }
  default:
   return state
 }
}