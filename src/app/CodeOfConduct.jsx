import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';

import ComingSoon from './ComingSoon';

function CodeOfConduct({ className }) {
  const blockClassName = classNames(css`
    display: flex;
    flex-direction: column;
  `, className);
  return (
    <ComingSoon className={blockClassName} sectionTitle="Code of Conduct" />
  );
}

CodeOfConduct.propTypes = {
  className: PropTypes.string,
};

CodeOfConduct.defaultProps = {
  className: '',
};

export default CodeOfConduct;
