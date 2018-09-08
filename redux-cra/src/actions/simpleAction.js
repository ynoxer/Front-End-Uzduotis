
export const simpleAction = () => dispatch => {
  console.log('this');
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
}
