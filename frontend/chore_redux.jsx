import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestChores, createChore } from './actions/chore_actions';
import { allChores } from './reducers/selector';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", (e) => {
  let rootEl = document.getElementById('content');
  let store = configureStore();
  window.store = store;
  window.allChores = allChores;
  window.requestChores = requestChores;
  window.createChore = createChore;
  window.a = {
    title: "wash car",
    body: "with soap",
    done: false
  };
  ReactDOM.render(<Root store={store} />, rootEl);
});
