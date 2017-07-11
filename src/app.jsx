import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import debounce from 'lodash/debounce';

import Header from './header/header';
import NavMenu from './nav-menu/nav-menu';

import Splash from './splash';

import Games from './games';
import SpaceEngineers from './games/space-engineers';
import Minecraft from './games/minecraft';
import Rust from './games/rust';

import Gallery from './gallery';
import Forum from './forum';
import CodeOfConduct from './coc';

import './app.css';

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

function getIsSmallScreen() {
  return window.innerWidth < 768;
}

class App extends Component {
  constructor() {
    super();

    const isSmallScreen = getIsSmallScreen();
    this.state = {
      isSmallScreen,
      showNavMenu: !isSmallScreen,
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
    const isSmallScreen = getIsSmallScreen();
    this.setState({
      isSmallScreen,
      showNavMenu: !isSmallScreen ? true : this.state.showNavMenu,
    });
  }

  handleItemSelected() {
    if (this.state.isSmallScreen) {
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
    const { isSmallScreen, showNavMenu } = this.state;

    let navMenuBlock;
    if (!isSmallScreen) {
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
            isSmallScreen={isSmallScreen}
          />
          <div className="app__content">
            {navMenuBlock}
            <div className="app__active-route">
              <Switch>
                <AppRoute exact path="/" component={Splash} />
                <AppRoute exact path="/www/" component={Splash} />
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
