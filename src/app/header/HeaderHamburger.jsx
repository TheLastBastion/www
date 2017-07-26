import React from 'react';
import PropTypes from 'prop-types';
import 'hamburgers/dist/hamburgers.min.css';
import styled from 'emotion/react';
import classNames from 'classnames';

const HeaderHamburgerStyled = styled('div')`
  left: 20px;
  position: absolute;

  .hamburger {
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }

    .hamburger-inner,
    .hamburger-inner::after,
    .hamburger-inner::before {
      background-color: white;
    }
  }
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
