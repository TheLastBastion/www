import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';

import ComingSoon from '../ComingSoon';

function Rust({ className }) {
  const blockClassName = classNames(css`
    display: flex;
    flex-direction: column;
  `, className);
  return (
    <ComingSoon className={blockClassName} sectionTitle="Rust" />
  );
}

Rust.propTypes = {
  className: PropTypes.string,
};

Rust.defaultProps = {
  className: '',
};

export default Rust;
