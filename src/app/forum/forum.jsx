import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ComingSoon from '../coming-soon/coming-soon';

import './forum.scss';

function Forum({ className }) {
  const blockClassName = classNames('forum', className);
  return (
    <div className={blockClassName}>
      <h2>This is the forum page</h2>
      <ComingSoon className="forum__coming-soon" />
    </div>
  );
}

Forum.propTypes = {
  className: PropTypes.string,
};

Forum.defaultProps = {
  className: '',
};

export default Forum;
