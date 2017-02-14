import path from 'path';
import express from 'express';

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';

import { ConfigureStore } from '../app/store';
import routes from '../app/routes';

// Create express server
const server = express();

// Set the directory for static assets
server.use(express.static(path.join(__dirname, '../../public')));

// Handle requests to the server
server.get('*', (req, res) => {

  // Attempt to match a route to the URL
  match({
    routes,
    location: req.url
  }, (error, redirectLocation, renderProps) => {

    // Error
    if (error) { res.status(500).end(error.message) };

    // Redirect
    if (redirectLocation) { return res.redirect(302, redirectLocation.pathname + redirectLocation.search) };

    // Route Not Found
    if (!renderProps) { return res.status(404).end('Not found') };

    //
    // A route was matched to the URL
    //

    // Create a new instance of the store
    const store = ConfigureStore();

    // Gather any components that were found
    const fetchComponents = renderProps.components
          // Unwrap any 'react-redux' components
          .map((component) => component.WrappedComponent ? component.WrappedComponent : component)
          // Grab the 'fetchData' static function from each component
          .filter((component) => component.fetchData);

    // Call each fetchData function and collect the resulting promise
    const fetchPromises = fetchComponents.map((component) => component.fetchData(store, renderProps));

    // Resolve all of the fetch promises
    Promise.all(fetchPromises)
      .then(() => {
        // fetchData() has now run on every component in the route and the
        // promises have resolved. The store is now populated.

        // Create the initial view
        const initialView = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        // Render the initial view to HTML
        const markup = renderToString(initialView);

        // Get the current (populated) state from the store
        const preloadedState = store.getState();

        // Send the rendered html (with preloaded state) to the client
        res.send(renderHTML(markup, preloadedState));

      })
      .catch((err) => console.log(err));

  });

  // Function: Render HTML
  function renderHTML(html, state) {
    return `<!DOCTYPE html>
  <html>
    <head>
      <title>Uni.js</title>
      <link rel="stylesheet" href="/bundle.css">
    </head>
    <body>
      <div id="app">${html}</div>
      <script>window.__PRELOADED_STATE__ = ${JSON.stringify(state)}</script>
      <script src="/bundle.js"></script>
    </body>
  </html>`;
  };

});

// Export the server
export default server;