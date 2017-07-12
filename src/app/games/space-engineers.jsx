import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ComingSoon from '../coming-soon/coming-soon';

import './space-engineers.scss';

function SpaceEngineers({ className }) {
  const blockClassName = classNames('space-engineers', className);
  return (
    <div className={blockClassName}>
      <h2>This is Space Engineers</h2>
      <ComingSoon className="space-engineers__coming-soon" />
    </div>
  );
}

SpaceEngineers.propTypes = {
  className: PropTypes.string,
};

SpaceEngineers.defaultProps = {
  className: '',
};

export default SpaceEngineers;
