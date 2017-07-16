import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';

import ComingSoon from '../ComingSoon';

function SpaceEngineers({ className }) {
  const blockClassName = classNames(css`
    display: flex;
    flex-direction: column;
  `, className);
  return (
    <ComingSoon className={blockClassName} sectionTitle="Space Engineers" />
  );
}

SpaceEngineers.propTypes = {
  className: PropTypes.string,
};

SpaceEngineers.defaultProps = {
  className: '',
};

export default SpaceEngineers;
