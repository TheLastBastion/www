import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';

import { TABLET, DESKTOP } from './constants/media-queries';
import NavMenu from './nav-menu/NavMenu';

import { isDesktop, isXL } from './utils/screen';


const menuSpeed = 400;


const className = css`
  bottom: 0;
  flex: 0 0 auto;
  height: 100vh;
  padding: 150px 0 0;
  position: absolute;
  width: 100vw;

  @media (min-width: ${TABLET}px) {
    width: 300px;
  }

  @media (min-width: ${DESKTOP}px) {
    height: calc(100vh - 150px);
    padding: 0;
    position: initial;
  }

  &.app-nav-menu-enter {
    transform: translateY(-100%);
  }

  &.app-nav-menu-enter.app-nav-menu-enter-active {
    transform: translateY(0);
    transition: transform ${menuSpeed}ms cubic-bezier(0.72, 1, 0.13, 0.52);
    transition: transform ${menuSpeed}ms cubic-bezier(0.72, 1.93, 0.13, 0.52);
  }

  &.app-nav-menu-leave {
    transform: translateY(0);
  }

  &.app-nav-menu-leave.app-nav-menu-leave-active {
    transform: translateY(-100%);
    transition: transform ${menuSpeed}ms cubic-bezier(0.6, 0, 0.735, 0.045);
    transition: transform ${menuSpeed}ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
`;

function AppNavMenu({ showNavMenu, handleItemSelected }) {
  const blockClassName = classNames('app-nav-menu', className);
  if (isDesktop() || isXL()) {
    return (
      <NavMenu className={blockClassName} handleItemSelected={handleItemSelected} />
    );
  }

  const navMenu = showNavMenu ? (
    <NavMenu key="navMenu" className={blockClassName} handleItemSelected={handleItemSelected} />
  ) : null;

  return (
    <ReactCSSTransitionGroup
      transitionName="app-nav-menu"
      transitionEnterTimeout={menuSpeed}
      transitionLeaveTimeout={menuSpeed}
    >
      {navMenu}
    </ReactCSSTransitionGroup>
  );
}

AppNavMenu.propTypes = {
  showNavMenu: PropTypes.bool.isRequired,
  handleItemSelected: PropTypes.func.isRequired,
};

export default AppNavMenu;
