import { UPDATE_CHORE, DELETE_CHORE, REQUEST_CHORES, RECEIVE_CHORES, receiveChores, receiveChore, removeChore, CREATE_CHORE } from '../actions/chore_actions';
import { updateChore, deleteChore, fetchChores, createChore } from '../util/chore_api_util';


export default ({ getState, dispatch }) => next => action => {
  const error = err => console.log(err.responseJSON);

  switch (action.type){
    case REQUEST_CHORES:
      const choresSuccess = data => dispatch(receiveChores(data));
      fetchChores(choresSuccess, error);
      return next(action);
    case CREATE_CHORE:
      const choreSuccess = data => dispatch(receiveChore(data));
      createChore(action, choreSuccess, error);
      return next(action);
    case UPDATE_CHORE:
      const updateSuccess = data => {
        dispatch(removeChore(data));
        dispatch(receiveChore(data));
      };
      updateChore(action, updateSuccess, error);
      return next(action);
    case DELETE_CHORE:
      const deleteSuccess = data => dispatch(removeChore(data));
      deleteChore(action, deleteSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};
