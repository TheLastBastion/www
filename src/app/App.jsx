import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
} from 'react-router-dom';
import { css } from 'emotion';
import createHashHistory from 'history/createHashHistory';
import debounce from 'lodash/debounce';

import { ThemeProvider } from 'theming';
import theme from './theme';

import AppNavMenu from './AppNavMenu';
import AppRoute from './AppRoute';

import Header from './header/Header';

import Home from './Home';

import Games from './games';
import SpaceEngineers from './games/SpaceEngineers';
import Minecraft from './games/Minecraft';
import Rust from './games/Rust';

import Gallery from './Gallery';
import Forum from './Forum';
import CodeOfConduct from './CodeOfConduct';

import { isSmall, isTablet, isDesktop, isXL } from './utils/screen';

const history = createHashHistory();

class App extends Component {
  constructor() {
    super();

    this.state = {
      showNavMenu: isDesktop() || isXL(),
    };

    this.updateDimensions = debounce(this.updateDimensions.bind(this), 150);
    this.handleItemSelected = this.handleItemSelected.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      showNavMenu: (isDesktop() || isXL()) ? true : this.state.showNavMenu,
    });
  }

  handleItemSelected() {
    if (isSmall() || isTablet()) {
      this.setState({
        showNavMenu: false,
      });
    }
  }

  toggleMenu() {
    this.setState({
      showNavMenu: !this.state.showNavMenu,
    });
  }

  render() {
    const { showNavMenu } = this.state;

    const blockClassName = css`
      background-color: ${theme.colors.backgroundColorDark}
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;

      .app__content {
        display: flex;
        flex: 1 1 auto;
        overflow: hidden;
        position: relative;
      }

      .app__active-route {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
      }
    `;

    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <div className={blockClassName}>
            <Header
              showNavMenu={showNavMenu}
              toggleMenu={this.toggleMenu}
            />
            <div className="app__content">
              <AppNavMenu showNavMenu={showNavMenu} handleItemSelected={this.handleItemSelected} />
              <div className="app__active-route">
                <Switch>
                  <AppRoute exact path="/" component={Home} />
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
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
