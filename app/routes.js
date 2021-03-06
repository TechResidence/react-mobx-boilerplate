import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './modules';
import Timer from './modules/Timer';
import Notes from './modules/Notes';
import Dashboard from './modules/Dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Timer} />
    <Route path="notes" component={Notes} />
    <Route path="dashboard" component={Dashboard} />
  </Route>
);