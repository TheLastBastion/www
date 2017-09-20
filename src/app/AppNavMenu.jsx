import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { css } from 'emotion';

import { navMenuTransitionSpeed } from './constants/animation-constants';
import { TABLET } from './constants/media-queries';

import MenuHamburger from './nav-menu/MenuHamburger';
import NavMenu from './nav-menu/NavMenu';

import { isSmall, isTablet } from './utils/screen';

class AppNavMenu extends Component {
  constructor() {
    super();
    this.state = {
      showNavMenu: false,
    };
  }

  // TODO test this behaviour
  handleItemSelected = () => {
    if (isSmall() || isTablet()) {
      this.setState({
        showNavMenu: false,
      });
    }
  }

  toggleMenu = () => {
    this.setState({
      showNavMenu: !this.state.showNavMenu,
    });
  }

  render() {
    const { showNavMenu } = this.state;

    const blockClassName = css`
      display: flex;
      position: fixed;
      width: 100vw;
      z-index: 2;

      @media (min-width: ${TABLET}px) {
        width: 300px;
      }

      .app-nav-menu__hamburger {
        z-index: 2;
      }

      .app-nav-menu__nav-menu {
        flex: 0 0 auto;
        height: 100vh;
        left: 0;
        padding: 150px 0 0;
        position: absolute;
        top: 0;
        width: 100vw;
        z-index: 1;

        @media (min-width: ${TABLET}px) {
          width: 300px;
        }

        &.app-nav-menu__nav-menu-enter {
          transform: translateX(-100%);
        }

        &.app-nav-menu__nav-menu-enter.app-nav-menu__nav-menu-enter-active {
          transform: translateX(0);
          transition: transform ${navMenuTransitionSpeed}ms ease-out;
        }

        &.app-nav-menu__nav-menu-leave {
          transform: translateX(0);
        }

        &.app-nav-menu__nav-menu-leave.app-nav-menu__nav-menu-leave-active {
          transform: translateX(-100%);
          transition: transform ${navMenuTransitionSpeed}ms ease-in;
        }
      }
    `;

    const navMenu = showNavMenu ? (
      <NavMenu key="navMenu" className="app-nav-menu__nav-menu" handleItemSelected={this.handleItemSelected} />
    ) : null;

    return (
      <div className={blockClassName}>
        <MenuHamburger className="app-nav-menu__hamburger" isActive={showNavMenu} toggleMenu={this.toggleMenu} />
        <ReactCSSTransitionGroup
          className="app-nav-menu__transition-group"
          transitionName="app-nav-menu__nav-menu"
          transitionEnterTimeout={navMenuTransitionSpeed}
          transitionLeaveTimeout={navMenuTransitionSpeed}
        >
          {navMenu}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default AppNavMenu;
