import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';

import ComingSoon from './ComingSoon';

function Gallery({ className }) {
  const blockClassName = classNames(css`
    display: flex;
    flex-direction: column;
  `, className);
  return (
    <ComingSoon className={blockClassName} sectionTitle="Gallery" />
  );
}

Gallery.propTypes = {
  className: PropTypes.string,
};

Gallery.defaultProps = {
  className: '',
};

export default Gallery;
