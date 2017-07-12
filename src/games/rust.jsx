import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ComingSoon from '../coming-soon';

import './rust.scss';

function Rust({ className }) {
  const blockClassName = classNames('rust', className);
  return (
    <div className={blockClassName}>
      <h2>This is Rust</h2>
      <ComingSoon className="rust__coming-soon" />
    </div>
  );
}

Rust.propTypes = {
  className: PropTypes.string,
};

Rust.defaultProps = {
  className: '',
};

export default Rust;
