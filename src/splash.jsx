import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ComingSoon from './coming-soon';

import './splash.scss';

function Splash({ className }) {
  const blockClassName = classNames('splash', className);
  return (
    <div className={blockClassName}>
      <h2>This is the splash page</h2>
      <ComingSoon className="splash__coming-soon" />
    </div>
  );
}

Splash.propTypes = {
  className: PropTypes.string,
};

Splash.defaultProps = {
  className: '',
};

export default Splash;
