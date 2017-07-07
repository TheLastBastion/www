import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import createHashHistory from 'history/createHashHistory';

import Splash from './splash';

import Games from './games';
import SpaceEngineers from './games/space-engineers';
import Minecraft from './games/minecraft';
import Rust from './games/rust';

import './app.css';

const history = createHashHistory();

const AppRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Component className="app__route" {...props} />
    )}
  />
);

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default function () {
  return (
    <Router history={history}>
      <div className="app">
        <div className="app__header">
          <h1>The Last Bastion</h1>
          <ul>
            <li><Link className="app__nav-link" to="/">Home</Link></li>
            <li><Link className="app__nav-link" to="/games">Games</Link></li>
          </ul>
        </div>
        <Switch>
          <AppRoute exact path="/" component={Splash} />
          <AppRoute exact path="/games" component={Games} />
          <AppRoute path="/games/space-engineers" component={SpaceEngineers} />
          <AppRoute path="/games/minecraft" component={Minecraft} />
          <AppRoute path="/games/rust" component={Rust} />
        </Switch>
      </div>
    </Router>
  );
}
