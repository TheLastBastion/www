import React from 'react';
import PropTypes from 'prop-types';
import {
  withRouter,
} from 'react-router-dom';
import { css } from 'emotion';
import classNames from 'classnames';
import { withTheme } from 'theming';

import NavMenuItem from './NavMenuItem';

const menuItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Games',
    path: '/games',
  },
  {
    title: 'Gallery',
    path: '/gallery',
  },
  {
    title: 'Forum',
    path: '/forum',
  },
  {
    title: 'Code of Conduct',
    path: '/coc',
  },
];

const NavMenuItemWithRouter = withRouter(NavMenuItem);

function NavMenu({ className, handleItemSelected, theme }) {
  const {
    colors: {
      backgroundColorDark,
    },
    size: {
      xxl,
    },
  } = theme;

  const baseClassName = css`
    color: white;
    background-color: ${backgroundColorDark};
    display: flex;
    flex-direction: column;
    text-decoration: none;
    text-transform: uppercase;

    .nav-menu__header {
      align-items: center;
      display: flex;
      flex: 0 0 auto;
      font-size: ${xxl};
      justify-content: center;
      padding: 0.5em;
      text-decoration: inherit;
      text-transform: inherit;
    }
  `;

  const blockClassName = classNames(baseClassName, className);
  const menuItemViews = menuItems.map((menuItem, index) => (
    <NavMenuItemWithRouter
      key={menuItem.title}
      index={index}
      title={menuItem.title}
      path={menuItem.path}
      handleItemSelected={handleItemSelected}
    />
  ));

  return (
    <div className={blockClassName}>
      <div className="nav-menu__header">Nav Menu</div>
      {menuItemViews}
    </div>
  );
}

NavMenu.propTypes = {
  className: PropTypes.string,
  handleItemSelected: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.shape[{
      backgroundColorDark: PropTypes.string,
    }],
    size: PropTypes.shape({
      xxl: PropTypes.string,
    }),
  }).isRequired,
};

NavMenu.defaultProps = {
  className: '',
  handleItemSelected: null,
};

export default withTheme(NavMenu);
