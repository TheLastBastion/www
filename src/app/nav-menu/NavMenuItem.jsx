import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { css, keyframes } from 'emotion';
import classNames from 'classnames';
import { withTheme } from 'theming';

import { navMenuTransitionSpeed } from '../constants/animation-constants';

const transitionLength = 600;

function getAnimationDelay(index) {
  return (index * (transitionLength / 12)) + navMenuTransitionSpeed;
}

function NavMenuItem({ theme, title, path, handleItemSelected, location, index }) {
  const { backgroundColorDark } = theme.colors;
  const { xl } = theme.size;
  const itemFontSizeStart = xl;
  const itemFontSizeEnd = `${window.Number.parseFloat(itemFontSizeStart) * 1.1}rem`;
  const isActive = location.pathname === path;

  const openMenu = keyframes`
    0% {
      font-size: ${itemFontSizeStart};
      opacity: ${isActive ? 1 : 0.7};

      &.is-active,
      &:hover,
      &:focus {
        opacity: 1;
      }
    }

    50% {
      opacity: 1;
      font-size: ${itemFontSizeEnd};
    }

    100% {
      font-size: ${itemFontSizeStart};
      opacity: ${isActive ? 1 : 0.7};

      &.is-active,
      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  `;

  const openMenuAfter = keyframes`
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  `;

  const baseClassName = css`
    align-items: center;
    animation: ${openMenu} ${transitionLength}ms ease ${getAnimationDelay(index)}ms;
    color: inherit;
    display: flex;
    flex: 0 0 auto;
    font-size: ${itemFontSizeStart};
    justify-content: center;
    opacity: 0.7;
    padding: 0.5em;
    position: relative;
    text-decoration: inherit;
    text-transform: inherit;
    transition: opacity ${transitionLength}ms, font-size ${transitionLength}ms;

    &::after {
      animation: ${openMenuAfter} ${transitionLength}ms ease ${getAnimationDelay(index)}ms;
      background-image: linear-gradient(to right, ${backgroundColorDark} 10%, white, ${backgroundColorDark} 90%);
      bottom: 8px;
      content: "";
      height: 1px;
      left: 50%;
      opacity: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: opacity ${transitionLength}ms;
      width: 300px;
    }

    &.is-active {
      opacity: 1;
    }

    &:hover,
    &:focus {
      font-size: ${itemFontSizeEnd};
      opacity: 1;

      &::after {
        opacity: 1;
      }
    }
  `;

  const blockClassName = classNames(baseClassName, {
    'is-active': isActive,
  });
  return (
    <Link
      className={blockClassName}
      to={path}
      onClick={handleItemSelected}
    >{title}</Link>
  );
}

NavMenuItem.propTypes = {
  index: PropTypes.number,
  theme: PropTypes.shape({
    colors: PropTypes.shape[{
      backgroundColorDark: PropTypes.string,
    }],
    size: PropTypes.shape({
      xl: PropTypes.string,
    }),
  }).isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleItemSelected: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

NavMenuItem.defaultProps = {
  index: 1,
};

NavMenuItem.displayName = 'NavMenuItem';

export default withTheme(NavMenuItem);
