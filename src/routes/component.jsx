import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Octagon from '../pages/octagon';
import Pentagon from '../pages/pentagon';
import Square from '../pages/square';
import PageNotFound from '../pages/page-not-found';

import { octagon, pentagon, square } from './urls';

const NavigationRoutes = () => (
  <Switch>
    <Route path={octagon} component={Octagon} />
    <Route path={pentagon} component={Pentagon} />
    <Route path={square} component={Square} />
    <Route component={PageNotFound} />
  </Switch>
);

export default NavigationRoutes;
