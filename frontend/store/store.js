import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';

const configureStore = () => {
  let store = createStore(rootReducer, masterMiddleware);
  return store;
};

export default configureStore;
