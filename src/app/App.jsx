import React from 'react';
import {
  HashRouter as Router,
  Switch,
} from 'react-router-dom';
import { css } from 'emotion';
import createHashHistory from 'history/createHashHistory';

import { ThemeProvider } from 'theming';
import theme from './style/theme';

import AppNavMenu from './AppNavMenu';
import AppRoute from './AppRoute';

import Splash from './splash/Splash';

import Auth from './auth/Auth';

import News from './news/News';

const history = createHashHistory();

function App() {
  const blockClassName = css`
    background-color: ${theme.colors.backgroundColorDarkAlt}
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    width: 100vw;

    .app__active-route {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      z-index: 1;
    }
  `;

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <div className={blockClassName}>
          <AppNavMenu />
          <div className="app__active-route">
            <Switch>
              <AppRoute exact path="/splash" component={Splash} />
              <AppRoute exact path="/auth" component={Auth} />
              <AppRoute path="/" component={News} />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
