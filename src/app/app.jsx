import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import debounce from 'lodash/debounce';

import Header from './header/header';
import NavMenu from './nav-menu/nav-menu';

import Home from './home/home';

import Games from './games';
import SpaceEngineers from './games/space-engineers';
import Minecraft from './games/minecraft';
import Rust from './games/rust';

import Gallery from './gallery/gallery';
import Forum from './forum/forum';
import CodeOfConduct from './coc/coc';

import { isSmall, isTablet, isDesktop, isXL } from './utils/screen';

import './app.scss';

const history = createHashHistory();

const AppRoute = ({ component: RouteComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <RouteComponent className="app__route" {...props} />
    )}
  />
);

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

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

    let navMenuBlock;
    if (isDesktop() || isXL()) {
      navMenuBlock = (
        <NavMenu className="app__nav-menu" handleItemSelected={this.handleItemSelected} />
      );
    } else {
      const navMenu = showNavMenu ? (
        <NavMenu key="navMenu" className="app__nav-menu" handleItemSelected={this.handleItemSelected} />
      ) : null;

      navMenuBlock = (
        <ReactCSSTransitionGroup
          transitionName="app__nav-menu"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {navMenu}
        </ReactCSSTransitionGroup>
      );
    }

    return (
      <Router history={history}>
        <div className="app">
          <Header
            showNavMenu={showNavMenu}
            toggleMenu={this.toggleMenu}
          />
          <div className="app__content">
            {navMenuBlock}
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
      </Router>
    );
  }
}

export default App;
