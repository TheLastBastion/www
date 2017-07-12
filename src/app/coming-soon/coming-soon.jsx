import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './coming-soon.scss';

function ComingSoon({ className }) {
  const blockClassName = classNames('coming-soon', className);

  return (
    <div className={blockClassName}>
      <span>Coming Soon!</span>
    </div>
  );
}

ComingSoon.propTypes = {
  className: PropTypes.string,
};

ComingSoon.defaultProps = {
  className: '',
};

export default ComingSoon;
