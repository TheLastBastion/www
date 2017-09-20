import React from 'react';
import PropTypes from 'prop-types';
import styled from 'emotion/react';
import classNames from 'classnames';

import { SMALL } from '../constants/media-queries';
import theme from '../style/theme';

import './menu-hamburger.scss';

const {
  colors: {
    backgroundColorDark,
  },
} = theme;

const MenuHamburgerStyled = styled('div')`
  align-items: center;
  background-color: ${backgroundColorDark};
  border-radius: 0;
  display: flex;
  flex-direction: column;
  margin: 0 1em 1em 0;

  @media (min-width: ${SMALL}px) {
    border-radius: 10%;
    margin: 1em;
  }

  .hamburger {
    padding: 1em 1em 0.5em;
  }

  .menu-hamburger__text {
    color: white;
    margin: 0 0 1em;
  }
`;

function MenuHamburger({ isActive, toggleMenu, className }) {
  const blockClassName = classNames('hamburger', 'hamburger--emphatic', {
    'is-active': isActive,
  });

  return (
    <MenuHamburgerStyled className={className}>
      <button className={blockClassName} type="button" onClick={toggleMenu}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <span className="menu-hamburger__text">Menu</span>
    </MenuHamburgerStyled>
  );
}

MenuHamburger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  className: PropTypes.string,
};

MenuHamburger.defaultProps = {
  className: '',
};

export default MenuHamburger;
