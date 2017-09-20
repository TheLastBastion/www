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

import News from './news/News';

import Games from './games';
import SpaceEngineers from './games/SpaceEngineers';
import Minecraft from './games/Minecraft';
import Rust from './games/Rust';

import Gallery from './Gallery';
import Forum from './Forum';
import CodeOfConduct from './CodeOfConduct';

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
              <AppRoute exact path="/" component={Splash} />
              <AppRoute exact path="/news" component={News} />
              <AppRoute exact path="/games" component={Games} />
              <AppRoute path="/games/space-engineers" component={SpaceEngineers} />
              <AppRoute path="/games/minecraft" component={Minecraft} />
              <AppRoute path="/games/rust" component={Rust} />
              <AppRoute path="/gallery" component={Gallery} />
              <AppRoute path="/forum" component={Forum} />
              <AppRoute path="/coc" component={CodeOfConduct} />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
