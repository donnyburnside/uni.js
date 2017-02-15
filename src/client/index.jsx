import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import '../styles/styles.global.css';
import { ConfigureStore } from '../app/store';
import routes from '../app/routes';

// Grab the preloaded state that we injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Create a new instance of the store using the preloaded state
const store = ConfigureStore(preloadedState);

// Render to the DOM
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);