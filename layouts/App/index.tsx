import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch } from 'react-router';

const Home = loadable(() => import('@pages/Home'));

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;
