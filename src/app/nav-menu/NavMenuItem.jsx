import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { css, keyframes } from 'emotion';
import classNames from 'classnames';
import { withTheme } from 'theming';

const itemSpeed = 600;
const itemFontSizeStart = 24;
const itemFontSizeEnd = 26;

const openMenu = keyframes`
  0% {
    font-size: ${itemFontSizeStart}px;
    opacity: 0.7;
    transition: opacity ${itemSpeed}ms, font-size ${itemSpeed}ms;
  }

  50% {
    opacity: 1;
    font-size: ${itemFontSizeEnd}px;
    transition: opacity ${itemSpeed}ms, font-size ${itemSpeed}ms;
  }

  100% {
    font-size: ${itemFontSizeStart}px;
    opacity: 0.7;
    transition: opacity ${itemSpeed}ms, font-size ${itemSpeed}ms;
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

function getAnimationDelay(index) {
  return (index * (itemSpeed / 12)) + (itemSpeed / 1.5);
}

function NavMenuItem({ theme, title, path, handleItemSelected, location, index }) {
  const { backgroundColorDark } = theme.colors;
  const baseClassName = css`

    align-items: center;
    animation: ${openMenu} ${itemSpeed}ms ease ${getAnimationDelay(index)}ms;
    color: inherit;
    display: flex;
    font-size: ${itemFontSizeStart}px;
    height: 58px;
    justify-content: center;
    opacity: 0.7;
    padding: 8px;
    position: relative;
    text-decoration: inherit;
    text-transform: inherit;
    transition: opacity ${itemSpeed}ms, font-size ${itemSpeed}ms;

    &::after {
      background-image: linear-gradient(to right, ${backgroundColorDark} 10%, white, ${backgroundColorDark} 90%);
      bottom: 8px;
      content: "";
      height: 1px;
      left: 50%;
      opacity: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: opacity ${itemSpeed}ms;
      width: 300px;
      animation: ${openMenuAfter} ${itemSpeed}ms ease ${getAnimationDelay(index)}ms;
    }

    &.is-active {
      opacity: 1;
    }

    &:hover,
    &:focus {
      font-size: ${itemFontSizeEnd}px;
      opacity: 1;
    }
  `;

  const blockClassName = classNames(baseClassName, {
    'is-active': location.pathname === path,
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
