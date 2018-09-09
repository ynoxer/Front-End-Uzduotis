
export default (state = {}, action) => {
 switch (action.type) {
  case 'SET_MOVIE_SELECTION':
    if (action.selection === 'batman') {
      console.log("I'm The Goddamn Batman!")
    }
    return {
      ...state,
      sort_selection: 0,
      movie_selection: action.selection
    }
  case 'GET_MOVIE_LIST':
   return {
    ...state,
    movies: action.content.data.Search
   }
  case 'SORT_MOVIE_LIST':
    let list = state.movies;

    (action.selection === 1) ? (
      list.sort((a, b) => b.Title.localeCompare(a.Title))
    ) : (action.selection === 2) ? (
      list.sort((a, b) => a.Title.localeCompare(b.Title))
    ) : (action.selection === 3) ? (
      list.sort((a, b) => b.Year.localeCompare(a.Year))
    ) : list.sort((a, b) => a.Year.localeCompare(b.Year))

    return {
      ...state,
      sort_selection: action.selection,
      movies: list
    }
  default:
   return state
 }
}