import { REQUEST_CHORES, RECEIVE_CHORES, RECEIVE_CHORE, REMOVE_CHORE } from '../actions/chore_actions';
import { merge } from 'lodash';

const _defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const choresReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_CHORES:
      newState = {};
      action.chores.forEach(chore => { newState[chore.id] = chore; });
      return newState;
    case RECEIVE_CHORE:
      newState = merge({}, oldState);
      newState[action.chore.id] = action.chore;
      return newState;
    case REMOVE_CHORE:
      let deletedChore = JSON.parse(action.chore);
      newState = merge({}, oldState);
      delete newState[deletedChore.id];
      return newState;
    default:
      return oldState;
  }
};

export default choresReducer;
