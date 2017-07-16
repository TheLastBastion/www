import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';

import ComingSoon from './ComingSoon';

function Forum({ className }) {
  const blockClassName = classNames(css`
    display: flex;
    flex-direction: column;
  `, className);
  return (
    <ComingSoon className={blockClassName} sectionTitle="Forum" />
  );
}

Forum.propTypes = {
  className: PropTypes.string,
};

Forum.defaultProps = {
  className: '',
};

export default Forum;
