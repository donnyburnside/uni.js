import { createStore } from 'redux';

import reducer from '../reducers';
import middleware from '../middleware';

export function ConfigureStore(initialState = {}) {
  return createStore(reducer, initialState, middleware);
};
