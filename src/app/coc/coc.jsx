import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ComingSoon from '../coming-soon/coming-soon';

import './coc.scss';

function CodeOfConduct({ className }) {
  const blockClassName = classNames('coc', className);
  return (
    <div className={blockClassName}>
      <h2>This is the coc page</h2>
      <ComingSoon className="coc__coming-soon" />
    </div>
  );
}

CodeOfConduct.propTypes = {
  className: PropTypes.string,
};

CodeOfConduct.defaultProps = {
  className: '',
};

export default CodeOfConduct;
