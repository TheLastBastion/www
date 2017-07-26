import React from 'react';
import PropTypes from 'prop-types';
import styled from 'emotion/react';
import classNames from 'classnames';

import './header-hamburger.scss';

const HeaderHamburgerStyled = styled('div')`
  left: 20px;
  position: absolute;
`;

function HeaderHamburger({ isActive, toggleMenu }) {
  const blockClassName = classNames('hamburger', 'hamburger--emphatic', {
    'is-active': isActive,
  });

  return (
    <HeaderHamburgerStyled>
      <button className={blockClassName} type="button" onClick={toggleMenu}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </HeaderHamburgerStyled>
  );
}

HeaderHamburger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default HeaderHamburger;
