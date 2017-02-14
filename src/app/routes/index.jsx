import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from '../components/Root';
import Home from '../components/Home';
import Page from '../components/Page';

const routes = (
  <Route path='/' component={Root}>
    <IndexRoute component={Home} />
    <Route path='/page' component={Page} />
  </Route>
);

export default routes;