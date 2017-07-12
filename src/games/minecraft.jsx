import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ComingSoon from '../coming-soon';

import './minecraft.scss';

function Minecraft({ className }) {
  const blockClassName = classNames('minecraft', className);
  return (
    <div className={blockClassName}>
      <h2>This is Minecraft</h2>
      <ComingSoon className="minecraft__coming-soon" />
    </div>
  );
}

Minecraft.propTypes = {
  className: PropTypes.string,
};

Minecraft.defaultProps = {
  className: '',
};

export default Minecraft;
