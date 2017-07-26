import React from 'react';
import PropTypes from 'prop-types';
import 'hamburgers/dist/hamburgers.min.css';
import { css } from 'emotion';
import { withTheme } from 'theming';

import HeaderHamburger from './HeaderHamburger';

import { isSmall, isTablet } from '../utils/screen';

function Header({ showNavMenu, theme, toggleMenu }) {
  const smallScreenMenuButton = isSmall() || isTablet() ? (
    <HeaderHamburger isActive={showNavMenu} toggleMenu={toggleMenu} />
  ) : null;

  const blockClassName = css`
    background-color: ${theme.colors.backgroundColorDark};
    color: white;
    flex: 0 0 auto;
    height: 150px;
    padding: 20px;
    position: relative;
    text-align: center;
  `;

  return (
    <div className={blockClassName}>
      {smallScreenMenuButton}
      <h1>The Last Bastion</h1>
    </div>
  );
}

Header.propTypes = {
  showNavMenu: PropTypes.bool,
  theme: PropTypes.shape({
    colors: PropTypes.shape[{
      backgroundColorDark: PropTypes.string,
    }],
  }).isRequired,
  toggleMenu: PropTypes.func,
};

Header.defaultProps = {
  showNavMenu: false,
  toggleMenu: () => {},
};

export default withTheme(Header);
