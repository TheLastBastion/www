import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import classNames from 'classnames';

import './nav-menu.css';

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

function NavMenuItem({ title, path, handleItemSelected }) {
  return (
    <Link
      key={title}
      className="nav-menu-item"
      to={path}
      onClick={handleItemSelected}
    >{title}</Link>
  );
}

NavMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleItemSelected: PropTypes.func.isRequired,
};

function NavMenu({ className, handleItemSelected }) {
  const blockClassName = classNames('nav-menu', className);
  const menuItemViews = menuItems.map(menuItem => (
    <NavMenuItem
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
};

NavMenu.defaultProps = {
  className: '',
  handleItemSelected: null,
};

export default NavMenu;
