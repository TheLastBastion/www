import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import 'hamburgers/dist/hamburgers.min.css';
import './header.css';

function Hamburger({ isActive, toggleMenu }) {
  const blockClassName = classNames('hamburger', 'hamburger--emphatic', {
    'is-active': isActive,
  });
  return (
    <button className={blockClassName} type="button" onClick={toggleMenu}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

Hamburger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

function Header({ isSmallScreen, showNavMenu, toggleMenu }) {
  const mobileMenuButton = !isSmallScreen ? null : (
    <Hamburger isActive={showNavMenu} toggleMenu={toggleMenu} />
  );

  return (
    <div className="header">
      {mobileMenuButton}
      <h1>The Last Bastion</h1>
    </div>
  );
}

Header.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
  showNavMenu: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

Header.defaultProps = {
  showNavMenu: false,
  toggleMenu: () => {},
};

export default Header;
